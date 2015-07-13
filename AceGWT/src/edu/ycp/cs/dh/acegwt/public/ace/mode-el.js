ace.define("ace/mode/el_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var ELHighlightRules = function() {

      var keywords = (
        "and|eq|gt|instanceof|or|ne|le|empty|not|lt|ge|div|mod|contains|" +
        "AND|EQ|GT|ISNTANCEOF|OR|NE|LE|EMPTY|NOT|LT|GE|DIV|MOD"
      );

      var buildinConstants = ("null|true|false");

      var keywordMapper = this.createKeywordMapper({
          //"variable.language": "self",
          "keyword": keywords,
          "constant.language": buildinConstants,
      }, "variable.other");



     this.$rules = {
          "start" : [
              {
                  token:  "keyword.statement",
                  regex:  "[\\$#]?{",
                  next: "statement"
              },
              {
                  token:  "keyword.statement",
                  regex:  "}",
                  next:   "start"
              },
          ],
          "statement" : [
              {
                  token:  "constant.numeric",
                  regex:  "\\b[0-9]+\\.?[0-9]*\\b"
              },
              {
                  token:  "string",
                  regex:  /'[^'"]*'/
              },
              {
                  token:  "string",
                  regex:  /"[^"]*"/
              },
              {
                  token:  "keyword.statement",
                  regex:  "{"
              },
              {
                  token:  "keyword.statement",
                  regex:  "}",
                  next:   "start"
              },
              {
                   token:  "keyword.operator",
                  regex:  "==|!="
              },
              {
                   token:  "keyword.operator",
                  regex:  "[-\\+<>\\|@=/]"
              },
            {
                  token : "punctuation.operator",
                  regex : "\\?|\\:|\\,|\\;|\\."
              },
                {
                  token : "paren.lparen",
                  regex : "[[(]"
              },
            {
                  token : "paren.rparen",
                  regex : "[\\])]"
              },
              {
                  token:  ["entity.name.function", "text", "paren.lparen"],
                  regex:  "([a-zA-Z_$][a-zA-Z0-9_$]*\\b)(\\s*)(\\()"
              },
              {
                  token:  keywordMapper,
                  regex:  "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
              },

          ]
      };
  };

  oop.inherits(ELHighlightRules, TextHighlightRules);

  exports.ELHighlightRules = ELHighlightRules;

  });

ace.define("ace/mode/el",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/el_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var ELHighlightRules = require("./el_highlight_rules").ELHighlightRules;

var Mode = function() {
    this.HighlightRules = ELHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/el"

}).call(Mode.prototype);

exports.Mode = Mode;
});
