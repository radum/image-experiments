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

import bundleURL, { imports } from 'client-bundle:client/quant/index.tsx';

interface Props {}

const QuantPage: FunctionalComponent<Props> = ({}: Props) => {
  return (
    <html lang="en">
      <head>
        <title>Quantisation</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
        <meta name="description" content="How quantisation works" />
        <link rel="stylesheet" href={pageStyles} />
        <script type="module" src={bundleURL} />
        {imports.map((v) => (
          <link rel="preload" as="script" href={v} crossOrigin="" />
        ))}
      </head>
      <body></body>
    </html>
  );
};

export default QuantPage;
