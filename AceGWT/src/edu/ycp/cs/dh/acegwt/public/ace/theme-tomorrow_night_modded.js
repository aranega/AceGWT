ace.define("ace/theme/tomorrow_night_modded",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-tomorrow-night-modded";
exports.cssText = ".ace-tomorrow-night-modded .ace_gutter {\
background: #25282c;\
color: #C5C8C6\
}\
.ace-tomorrow-night-modded .ace_print-margin {\
width: 1px;\
background: #25282c\
}\
.ace-tomorrow-night-modded {\
background-color: #1D1F21;\
color: #C5C8C6\
}\
.ace-tomorrow-night-modded .ace_cursor {\
color: #AEAFAD\
}\
.ace-tomorrow-night-modded .ace_marker-layer .ace_selection {\
background: #373B41\
}\
.ace-tomorrow-night-modded.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1D1F21;\
border-radius: 2px\
}\
.ace-tomorrow-night-modded .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-tomorrow-night-modded .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
}\
.ace-tomorrow-night-modded .ace_marker-layer .ace_active-line {\
background: #282A2E\
}\
.ace-tomorrow-night-modded .ace_gutter-active-line {\
background-color: #282A2E\
}\
.ace-tomorrow-night-modded .ace_marker-layer .ace_selected-word {\
border: 1px solid #373B41\
}\
.ace-tomorrow-night-modded .ace_invisible {\
color: #4B4E55\
}\
.ace-tomorrow-night-modded .ace_keyword,\
.ace-tomorrow-night-modded .ace_meta,\
.ace-tomorrow-night-modded .ace_storage,\
.ace-tomorrow-night-modded .ace_storage.ace_type,\
.ace-tomorrow-night-modded .ace_support.ace_type {\
color: #B294BB\
}\
.ace-tomorrow-night-modded .ace_keyword.ace_operator {\
color: #8ABEB7\
}\
.ace-tomorrow-night-modded .ace_constant.ace_character,\
.ace-tomorrow-night-modded .ace_constant.ace_language,\
.ace-tomorrow-night-modded .ace_constant.ace_numeric,\
.ace-tomorrow-night-modded .ace_keyword.ace_other.ace_unit,\
.ace-tomorrow-night-modded .ace_support.ace_constant,\
.ace-tomorrow-night-modded .ace_variable.ace_parameter {\
color: #DE935F\
}\
.ace-tomorrow-night-modded .ace_constant.ace_other {\
color: #CED1CF\
}\
.ace-tomorrow-night-modded .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-tomorrow-night-modded .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-tomorrow-night-modded .ace_fold {\
background-color: #81A2BE;\
border-color: #C5C8C6\
}\
.ace-tomorrow-night-modded .ace_entity.ace_name.ace_function,\
.ace-tomorrow-night-modded .ace_variable {\
color: #81A2BE\
}\
.ace-tomorrow-night-modded .ace_support.ace_function {\
color: #8EC8D2\
}\
.ace-tomorrow-night-modded .ace_support.ace_class {\
color: #F0C674\
}\
.ace-tomorrow-night-modded .ace_support.ace_type {\
color: #CC6666;\
font-weight: bold\
}\
.ace-tomorrow-night-modded .ace_heading,\
.ace-tomorrow-night-modded .ace_markup.ace_heading,\
.ace-tomorrow-night-modded .ace_string {\
color: #B5BD68\
}\
.ace-tomorrow-night-modded .ace_variable {\
color: #F0C674\
}\
.ace-tomorrow-night-modded .ace_entity.ace_name.ace_tag,\
.ace-tomorrow-night-modded .ace_entity.ace_other.ace_attribute-name,\
.ace-tomorrow-night-modded .ace_meta.ace_tag,\
.ace-tomorrow-night-modded .ace_string.ace_regexp {\
color: #CC6666\
}\
.ace-tomorrow-night-modded .ace_comment {\
color: #969896\
}\
.ace-tomorrow-night-modded .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
