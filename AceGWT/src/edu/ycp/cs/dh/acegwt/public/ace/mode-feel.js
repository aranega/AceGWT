ace.define("ace/mode/feel_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
  "use strict";

  var oop = require("../lib/oop");
  var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

  var FEELHighlightRules = function() {

      var keywords = (
        "and|or|if|in|return|for|then|else|some|every|satisfies|" +
        "date|time|duration"
      );

      var buildinConstants = ("null|true|false");

      var keywordMapper = this.createKeywordMapper({
          "keyword": keywords,
          "constant.language": buildinConstants,
      }, "variable.other");



     this.$rules = {
          "start" : [
               {
            	  token : "comment",
                  regex : "\\/\\/.*"
              },
              {
            	  token : "comment",
                  regex : "\\/\\*",
                  next : "comments"
              },
              {
                  token:  "constant.numeric",
                  regex:  "\\b[0-9]+\\.?[0-9]*\\b"
              },
              {
                  token:  "variable.other",
                  regex:  /'[^'"]*'/
              },
              {
                  token:  "string",
                  regex:  /"[^"]*"/
              },
              {
                  token:  "keyword.statement",
                  regex:  "{|\\["
              },
              {
                  token:  "keyword.statement",
                  regex:  "}|\\]"
              },
              {
                   token:  "keyword.operator",
                  regex:  "!="
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
                  regex : "\\("
              },
              {
                  token : "paren.rparen",
                  regex : "\\)"
              },
              {
                  token:  ["entity.name.function", "text", "paren.lparen"],
                  regex:  "([a-zA-Z_$][a-zA-Z0-9_$]*\\b)(\\s*)(\\()"
              },
              {
            	  token: "keyword",
            	  regex: "\\binstance\\s+of\\b"
              },
              {
            	  token: "keyword",
            	  regex: "\\bdate\\s+and\\s+time\\b"
              },
              {
                  token:  keywordMapper,
                  regex:  "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
              }
          ],
          "comments" : [
              {
            	  token : "comment",
                  regex : "\\*\\/",
                  next : "start"
              },
              {
            	  token : "comment",
            	  regex : ".*"
              }
          ]
      };
  };

  oop.inherits(FEELHighlightRules, TextHighlightRules);

  exports.FEELHighlightRules = FEELHighlightRules;

  });

ace.define("ace/mode/feel",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/el_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var FEELHighlightRules = require("./feel_highlight_rules").FEELHighlightRules;

var Mode = function() {
    this.HighlightRules = FEELHighlightRules;
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/feel"

}).call(Mode.prototype);

exports.Mode = Mode;
});
