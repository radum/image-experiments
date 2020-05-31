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
import { h } from 'preact';

import { renderPage, writeFiles } from './utils';
import ChannelsIndex from './pages/channels/index';
import QuantPage from './pages/quant';
import AlteredPage from './pages/altered';

interface Output {
  [outputPath: string]: string;
}
const toOutput: Output = {
  'channels/index.html': renderPage(<ChannelsIndex />),
  'quant/index.html': renderPage(<QuantPage />),
  'altered/index.html': renderPage(<AlteredPage />),
};

writeFiles(toOutput);
