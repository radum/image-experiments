/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { h, FunctionalComponent } from 'preact';
import pageStyles from 'css-bundle:./styles.css';

interface Props {}

const IndexPage: FunctionalComponent<Props> = ({}: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Image experiments</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <link rel="stylesheet" href={pageStyles} />
      </head>
      <body>
        <ul>
          <li>
            <a href="channels/">YCrCb resizing</a>
          </li>
          <li>
            <a href="quant/">DCT quantisation</a>
          </li>
        </ul>
      </body>
    </html>
  );
};

export default IndexPage;
