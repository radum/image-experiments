import{m as e,p as t,h as i,H as o}from"./preact.module-8081643e.js";function r(e,t,i){const o=e.createShader(i);if(e.shaderSource(o,t),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){const t=e.getShaderInfoLog(o);throw e.deleteShader(o),Error(t||"unknown error")}return o}function s(e,t){const i=e.createTexture();return e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),i}class a extends e{constructor(){super(...arguments),this._canvasRef=t()}_setup(){const e=this._canvasRef.current.getContext("webgl",{antialias:!1,powerPreference:"low-power"});if(!e)throw Error("Couldn't create GL context");this._gl=e;const t=function(e,t){const i=e.createProgram();for(const o of t)e.attachShader(i,o);if(e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS)){const t=e.getProgramInfoLog(i);throw e.deleteProgram(i),Error(t||"unknown error")}return i}(e,[r(e,'/**\n* Copyright 2020 Google Inc. All Rights Reserved.\n* Licensed under the Apache License, Version 2.0 (the "License");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*     http://www.apache.org/licenses/LICENSE-2.0\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an "AS IS" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n*/\nprecision lowp float;\n\n// our textures\nuniform sampler2D u_luma;\nuniform sampler2D u_chroma;\nuniform float showY;\nuniform float showCb;\nuniform float showCr;\n\n// the texCoords passed in from the vertex shader.\nvarying vec2 v_texCoord;\n\nvoid main() {\n  vec4 lumaRGB = texture2D(u_luma, v_texCoord).rgba;\n  vec4 chromaRGB = texture2D(u_chroma, v_texCoord).rgba;\n  float y = mix(0.5, 0.256788235 * lumaRGB.r + 0.504129412 * lumaRGB.g + 0.097905882 * lumaRGB.b + 0.062745098, showY);\n  float cb = mix(0.5, -0.148223529 * chromaRGB.r + -0.290992157 * chromaRGB.g + 0.439215686 * chromaRGB.b + 0.501960784, showCb);\n  float cr = mix(0.5, 0.439215686 * chromaRGB.r + -0.367788235 * chromaRGB.g + -0.071427451 * chromaRGB.b + 0.501960784, showCr);\n\n  float yMul = 1.164381 * y;\n\n  gl_FragColor = vec4(\n    yMul + 1.5960195 * cr + -0.8742024,\n    yMul + -0.3917565 * cb + -0.8129655 * cr + 0.5316682,\n    yMul + 2.0172285 * cb + -1.0856326,\n    1\n  );\n}\n',e.FRAGMENT_SHADER),r(e,'/**\n* Copyright 2020 Google Inc. All Rights Reserved.\n* Licensed under the Apache License, Version 2.0 (the "License");\n* you may not use this file except in compliance with the License.\n* You may obtain a copy of the License at\n*     http://www.apache.org/licenses/LICENSE-2.0\n* Unless required by applicable law or agreed to in writing, software\n* distributed under the License is distributed on an "AS IS" BASIS,\n* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n* See the License for the specific language governing permissions and\n* limitations under the License.\n*/\nprecision lowp float;\n\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\n\nvarying vec2 v_texCoord;\n\nvoid main() {\n   gl_Position = vec4(u_matrix * vec3(a_position, 1), 1);\n\n   // because we\'re using a unit quad we can just use\n   // the same data for our texcoords.\n   v_texCoord = a_position;\n}\n',e.VERTEX_SHADER)]);e.useProgram(t);const i=e.getAttribLocation(t,"a_position"),o=e.getUniformLocation(t,"u_luma");e.uniform1i(o,0);const s=e.getUniformLocation(t,"u_chroma");e.uniform1i(s,1);const a=e.getUniformLocation(t,"u_matrix");this._showYLoc=e.getUniformLocation(t,"showY"),this._showCbLoc=e.getUniformLocation(t,"showCb"),this._showCrLoc=e.getUniformLocation(t,"showCr");const n=e.createBuffer(),h=new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]);e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,h,e.STATIC_DRAW),e.enableVertexAttribArray(i),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0),e.uniformMatrix3fv(a,!1,[2,0,0,0,-2,0,-1,1,1]),e.uniform1f(this._showYLoc,Number(this.props.showY)),e.uniform1f(this._showCbLoc,Number(this.props.showCb)),e.uniform1f(this._showCrLoc,Number(this.props.showCr))}_updateLuma(){this._lumaTexture&&this._gl.deleteTexture(this._lumaTexture),this._gl.activeTexture(this._gl.TEXTURE0),this._lumaTexture=s(this._gl,this.props.lumaBmp),this._gl.bindTexture(this._gl.TEXTURE_2D,this._lumaTexture)}_updateChroma(){this._chromaTexture&&this._gl.deleteTexture(this._chromaTexture),this._gl.activeTexture(this._gl.TEXTURE1),this._chromaTexture=s(this._gl,this.props.chromaBmp),this._gl.bindTexture(this._gl.TEXTURE_2D,this._chromaTexture)}_draw(){this._gl.drawArrays(this._gl.TRIANGLES,0,6)}componentDidMount(){this._setup(),this._updateLuma(),this._updateChroma(),this._draw()}componentDidUpdate(e){let t=!1;e.width===this.props.width&&e.height===this.props.height||(t=!0,this._gl.viewport(0,0,this._gl.canvas.width,this._gl.canvas.height)),e.chromaBmp!==this.props.chromaBmp&&(t=!0,this._updateChroma()),e.lumaBmp!==this.props.lumaBmp&&(t=!0,this._updateLuma()),e.showY!==this.props.showY&&(this._gl.uniform1f(this._showYLoc,Number(this.props.showY)),t=!0),e.showCb!==this.props.showCb&&(this._gl.uniform1f(this._showCbLoc,Number(this.props.showCb)),t=!0),e.showCr!==this.props.showCr&&(this._gl.uniform1f(this._showCrLoc,Number(this.props.showCr)),t=!0),t&&this._draw()}render({width:e,height:t}){return i("canvas",{class:"_chromaCanvas_kcbaf_1",ref:this._canvasRef,width:e,height:t})}}class n extends e{constructor(){super(...arguments),this._lumaMultiRef=t(),this._chromaMultiRef=t(),this._showYRef=t(),this._showCbRef=t(),this._showCrRef=t(),this._onChange=()=>{this.props.onChange({lumaMulti:this._lumaMultiRef.current.valueAsNumber,chromaMulti:this._chromaMultiRef.current.valueAsNumber,showY:this._showYRef.current.checked,showCb:this._showCbRef.current.checked,showCr:this._showCrRef.current.checked})}}render({lumaMulti:e,chromaMulti:t,width:o,height:r,showY:s,showCb:a,showCr:n}){return i("div",{class:"_controls_10a3c_1"},i("div",{class:"_ranges_10a3c_11"},i("label",{for:"luma-range"},"Luma: "),i("input",{id:"luma-range",ref:this._lumaMultiRef,type:"range",value:e,min:1e-4,max:1,step:"any",onInput:this._onChange}),i("span",{class:"_multiplier_10a3c_21"},e.toFixed(2),"x"),i("span",{class:"_data_10a3c_22"},(e*e).toFixed(3),"x²"),i("span",null,Math.round(o*e),"x",Math.round(r*e)),i("label",{for:"chroma-range"},"Chroma: "),i("input",{id:"chroma-range",ref:this._chromaMultiRef,type:"range",value:t,min:1e-4,max:1,step:"any",onInput:this._onChange}),i("span",{class:"_multiplier_10a3c_21"},t.toFixed(2),"x"),i("span",{class:"_data_10a3c_22"},(t*t).toFixed(3),"x²"),i("span",null,Math.round(o*t),"x",Math.round(r*t))),i("div",{class:"_toggles_10a3c_30"},i("label",{for:"show-y"},"Y"),i("input",{ref:this._showYRef,id:"show-y",type:"checkbox",checked:s,onInput:this._onChange}),i("label",{for:"show-cb"},"Cb"),i("input",{ref:this._showCbRef,id:"show-cb",type:"checkbox",checked:a,onInput:this._onChange}),i("label",{for:"show-cr"},"Cr"),i("input",{ref:this._showCrRef,id:"show-cr",type:"checkbox",checked:n,onInput:this._onChange})))}}const h=new URLSearchParams(location.search),c="1"===h.get("hideUi"),u="1"===h.get("demo"),m=Number(h.get("l"))||1,l=Number(h.get("uv"))||.1;async function _(e,t,i){if(e.width<=t&&e.height<=i)return e;return e.width/e.height>t/i?createImageBitmap(e,{resizeWidth:t,resizeQuality:"high"}):createImageBitmap(e,{resizeHeight:i,resizeQuality:"high"})}async function p(e,t){return 1===t?e:createImageBitmap(e,{resizeWidth:Math.ceil(e.width*t)})}o(i(class extends e{constructor(){super(),this.state={lumaMulti:m,chromaMulti:l,showY:!0,showCb:!0,showCr:!0},this._resizeTimeout=0,this._rangeTimeout=0,this._canvasContainerRef=t(),this._onFileChange=async e=>{const t=e.target;t.files&&t.files[0]&&this._openFile(t.files[0])},this._onResize=()=>{clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(async()=>{if(!this.state.mainBmp)return;const e=this._canvasContainerRef.current.getBoundingClientRect(),t=await _(this.state.mainBmp,e.width*devicePixelRatio,e.height*devicePixelRatio),[i,o]=await Promise.all([p(t,this.state.lumaMulti),p(t,this.state.chromaMulti)]);this.setState({resizedBmp:t,lumaBmp:i,chromaBmp:o})},100)},this._onControlsChange=e=>{this.setState({chromaMulti:e.chromaMulti,lumaMulti:e.lumaMulti,showY:e.showY,showCb:e.showCb,showCr:e.showCr})},u&&fetch("/image-experiments/img-b36c77dc.jpg").then(e=>e.blob()).then(e=>this._openFile(e))}async _openFile(e){const t=await createImageBitmap(e),i=this._canvasContainerRef.current.getBoundingClientRect(),o=await _(t,i.width*devicePixelRatio,i.height*devicePixelRatio),[r,s]=await Promise.all([p(o,this.state.lumaMulti),p(o,this.state.chromaMulti)]);this.setState({mainBmp:t,resizedBmp:o,lumaBmp:r,chromaBmp:s})}componentDidMount(){addEventListener("resize",this._onResize)}componentWillUnmount(){removeEventListener("resize",this._onResize)}componentDidUpdate(e,t){const i={...this.state};i.lumaMulti===t.lumaMulti&&i.chromaMulti===t.chromaMulti||(clearTimeout(this._rangeTimeout),this._rangeTimeout=setTimeout(async()=>{let e,o;i.lumaMulti!==t.lumaMulti&&(e=p(i.resizedBmp,i.lumaMulti)),i.chromaMulti!==t.chromaMulti&&(o=p(i.resizedBmp,i.chromaMulti));const r={};e&&(r.lumaBmp=await e),o&&(r.chromaBmp=await o),this.setState(r)},50))}render({},{resizedBmp:e,lumaBmp:t,chromaBmp:o,chromaMulti:r,lumaMulti:s,showY:h,showCb:u,showCr:m}){return i("div",{class:"_app_64mjq_19"},i("div",{class:"_layout_64mjq_24"},i("div",{class:"_canvasContainer_64mjq_29",ref:this._canvasContainerRef},e&&t&&o&&i(a,{chromaBmp:o,lumaBmp:t,width:e.width,height:e.height,showY:h,showCb:u,showCr:m})),!c&&i(n,{lumaMulti:s,chromaMulti:r,onChange:this._onControlsChange,width:e?e.width:0,height:e?e.height:0,showY:h,showCb:u,showCr:m})),!c&&i("input",{type:"file",accept:"image/*",onChange:this._onFileChange}))}},null),document.body);
