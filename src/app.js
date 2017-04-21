import { injectHtml } from './js/html';
const css = require('./main.scss');

import { renderHeader } from './js/header';
import { renderFooter } from './js/footer';
import { pageHeader } from './js/header';

injectHtml.init();

renderHeader();
renderFooter();
pageHeader();

