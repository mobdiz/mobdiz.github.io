import type { App } from 'vue';

import {
  ElContainer,
  ElAside,
  ElDrawer,
  ElScrollbar,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputNumber,
  ElButton,
  ElHeader,
  ElFooter,
  ElMain,
  ElText,
  ElLink,
  ElIcon,
} from 'element-plus';

import 'element-plus/theme-chalk/el-var.css';
import 'element-plus/theme-chalk/el-container.css';
import 'element-plus/theme-chalk/el-aside.css';
import 'element-plus/theme-chalk/el-drawer.css';
import 'element-plus/theme-chalk/el-scrollbar.css';
import 'element-plus/theme-chalk/el-form.css';
import 'element-plus/theme-chalk/el-form-item.css';
import 'element-plus/theme-chalk/el-input.css';
import 'element-plus/theme-chalk/el-input-number.css';
import 'element-plus/theme-chalk/el-button.css';
import 'element-plus/theme-chalk/el-header.css';
import 'element-plus/theme-chalk/el-footer.css';
import 'element-plus/theme-chalk/el-main.css';
import 'element-plus/theme-chalk/el-text.css';
import 'element-plus/theme-chalk/el-link.css';
import 'element-plus/theme-chalk/el-icon.css';

export default {
  install: (app: App) => {
    app.component('el-container', ElContainer);
    app.component('el-aside', ElAside);
    app.component('el-drawer', ElDrawer);
    app.component('el-scrollbar', ElScrollbar);
    app.component('el-form', ElForm);
    app.component('el-form-item', ElFormItem);
    app.component('el-input', ElInput);
    app.component('el-input-number', ElInputNumber);
    app.component('el-button', ElButton);
    app.component('el-header', ElHeader);
    app.component('el-footer', ElFooter);
    app.component('el-main', ElMain);
    app.component('el-text', ElText);
    app.component('el-link', ElLink);
    app.component('el-icon', ElIcon);
  },
};
