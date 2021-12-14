(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);




function layer(context, selectedLayer) {
  switch (selectedLayer.type) {
    case 'text':
      // Getting text information for one specific TextStyle
      var body = getTextElement(context, selectedLayer);
      return {
        code: "".concat(body),
        language: "dart"
      };
      break;

    case 'shape':
      // Getting shape information
      var container = getContainer(context, selectedLayer);
      return {
        code: convertContainerToDart(container, context),
        language: 'dart'
      };
      break;

    case 'group':
      // Missing to implement, it will in future versions
      return {
        code: "group",
        language: 'dart'
      };
      break;

    default:
  }
}

function colors(context) {
  // Mapping colors from context.project
  var body = convertColorsListToDart(context).join("\n");
  return {
    code: body,
    language: "dart"
  };
}

function textStyles(context) {
  // Mapping textStyles from context.project
  return {
    code: convertTextStylesListToDart(context).join("\n"),
    language: "dart"
  };
}

function exportColors(context) {
  // Exporting color to DART file
  var dartCode = "import 'package:flutter/material.dart';\n\n".concat(convertColorsListToDart(context).join("\n"));
  return {
    code: dartCode,
    filename: "".concat(context.project.name, "Colors.dart"),
    language: "dart"
  };
}

function exportTextStyles(context) {
  // Exporting textStyle to DART file
  var dartCode = "import 'package:flutter/material.dart';\n\n".concat(convertTextStylesListToDart(context).join("\n"));
  return {
    code: dartCode,
    filename: "".concat(context.project.name, "TextStyles.dart"),
    language: "dart"
  };
}

function screen(context, selectedVersion, selectedScreen) {
  return {
    code: 'Cooming soon',
    filename: "".concat(context.project.name, "TextStyles.dart"),
    language: "dart"
  };
}

function component(context, selectedVersion, selectedComponent) {
  return {
    code: 'Cooming soon...',
    filename: "".concat(context.project.name, "TextStyles.dart"),
    language: "dart"
  };
} // /**
//  * The following functions will be deprecated. Your extensions can export them to support old versions of Zeplin's macOS app.
//  * See Zeplin Extensions migration guide for details:
//  * https://zpl.io/shared-styleguides-extensions-migration-guide
//  */
// function styleguideColors(context, colors) {
// }
// function styleguideTextStyles(context, textStyles) {
// }
// function exportStyleguideColors(context, colors) {
// }
// function exportStyleguideTextStyles(context, textStyles) {
// }
// function comment(context, text) {
// }

/*
The functions below are used for generate Flutter Widgets,
Container, BoxDecoration, Shadows, etc. 
*/

/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function buildingBoxDecoration(context, layer) {
  // Getting a new decoration Box
  var decoration = new BoxDecoration(); // Evaluating if the selected layer has Fills

  if (layer.fills.length > 0) {
    // Getting gradient 
    decoration.gradient = getGradient(context, layer); // Without gradient

    if (decoration.gradient == null) {
      // Without Gradient
      decoration.color = new Color(layer.fills[layer.fills.length - 1].color.toHex().r, layer.fills[layer.fills.length - 1].color.toHex().g, layer.fills[layer.fills.length - 1].color.toHex().b, layer.fills[layer.fills.length - 1].color.toHex().a);
    }
  } // Getting Border


  decoration.border = getBorder(context, layer); // Assigning borderRadius

  if (layer.borderRadius != 0) {
    decoration.borderRadius = layer.borderRadius;
  } // Getting Shadows


  decoration.shadows = getShadows(context, layer.shadows); // Adding Opacity to the Layer

  decoration.opacity = layer.opacity;
  return decoration;
}
/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function getTextElement(context, layer) {
  var body;

  if (layer.textStyles.length > 1) {
    // List of TextSpans
    var textSpans = [];
    layer.textStyles.map(textSpan => {
      textSpans.push(new Text(layer.content.substring(textSpan.range.start, textSpan.range.end), null, new TextStyle(textSpan.textStyle.fontFamily, new Color(textSpan.textStyle.color.toHex().r, textSpan.textStyle.color.toHex().g, textSpan.textStyle.color.toHex().b, textSpan.textStyle.color.toHex().a), textSpan.textStyle.fontSize, textSpan.textStyle.fontWeight, textSpan.textStyle.fontStyle, textSpan.textStyle.letterSpacing, textSpan.textStyle.lineHeight, getShadows(context, layer.shadows))));
    });
    body = convertRichTextToDart(textSpans, layer.textStyles[0].textStyle.textAlign, context);
  } else if (layer.textStyles.length == 1) {
    body = convertTextToDart(new Text(layer.content, layer.textStyles[0].textStyle.textAlign, new TextStyle(layer.textStyles[0].textStyle.fontFamily, new Color(layer.textStyles[0].textStyle.color.toHex().r, layer.textStyles[0].textStyle.color.toHex().g, layer.textStyles[0].textStyle.color.toHex().b, layer.textStyles[0].textStyle.color.toHex().a), layer.textStyles[0].textStyle.fontSize, layer.textStyles[0].textStyle.fontWeight, layer.textStyles[0].textStyle.fontStyle, layer.textStyles[0].textStyle.letterSpacing, layer.textStyles[0].textStyle.lineHeight, getShadows(context, layer.shadows))), context);
  }

  return body;
}
/**
 * 
 * @param {*} context has all elements from the entire project
 * @param {*} color to evaluate if exists on the project 
 */


function getColorNameFromProject(context, color) {
  // The color must be the object from Zepli Model not DART
  colors = [];
  var colorName = ''; // It is important to evaluate before map the colors
  // if the context is not null

  if (context != null) {
    context.project.colors.map(colorMap => {
      // Evaluating if the color exists for the project
      var dartColor = new Color(colorMap.toHex().r, colorMap.toHex().g, colorMap.toHex().b, colorMap.toHex().a); // Both colors must be object dart colors model

      if (equalsColor(dartColor, color)) {
        // The name of the color will show instead of hex code
        colorName = colorMap.name;
      }
    });
  }

  return colorName;
}
/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function getContainer(context, layer) {
  var container = new Container(layer.rect.width, layer.rect.height);
  container.decoration = buildingBoxDecoration(context, layer);
  return container;
}
/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function getGradient(context, layer) {
  if (layerHasGradient(context, layer)) {
    // Building the Gradient
    return new Gradient(layer.fills[layer.fills.length - 1].gradient.type, // List of Colors
    layer.fills[layer.fills.length - 1].gradient.colorStops.map(colorMap => {
      return new Color(colorMap.color.toHex().r, colorMap.color.toHex().g, colorMap.color.toHex().b, colorMap.color.toHex().a);
    }), // List of Stops
    layer.fills[layer.fills.length - 1].gradient.colorStops.map(colorMap => {
      return colorMap.position;
    }), layer.fills[layer.fills.length - 1].gradient.angle);
  }

  return null;
}
/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function getBorder(context, layer) {
  // Adding Shadows to the Layer
  if (layer.borders.length > 0) {
    const lastBorder = layer.borders[layer.borders.length - 1];

    if (lastBorder.fill == "color") {
      return new Border(new Color(lastBorder.fill.color.toHex().r, lastBorder.fill.color.toHex().g, lastBorder.fill.color.toHex().b, lastBorder.fill.color.toHex().a), lastBorder.thickness);
    } else {
      return null;
    }
  } else {
    return null;
  }
}
/**
 * 
 * @param {*} context 
 * @param {*} shadows 
 */


function getShadows(context, shadows) {
  // Adding Shadows to the Layer
  if (shadows.length > 0) {
    return shadows.map(shadow => {
      return new BoxShadow(new Color(shadow.color.toHex().r, shadow.color.toHex().g, shadow.color.toHex().b, shadow.color.toHex().a), shadow.offsetX, shadow.offsetY, shadow.blurRadius, shadow.spread);
    });
  } else {
    return null;
  }
}
/*
The functions below are used to generate Flutter Widgets Objects to DART CODE,
*/

/**
 * 
 * @param {*} container 
 */


function convertContainerToDart(container, context) {
  var decorationElements = [];

  if (container.decoration != null) {
    if (container.decoration.color != null) {
      decorationElements.push("color: ".concat(convertColorToDart(container.decoration.color, 1, false, context)));
    }

    if (container.decoration.border != null) {
      decorationElements.push("border: ".concat(convertBorderToDart(container.decoration.border, context)));
    }

    if (container.decoration.borderRadius != null) {
      decorationElements.push("\t\tborderRadius: BorderRadius.circular(".concat(container.decoration.borderRadius, ")"));
    }

    if (container.decoration.gradient != null) {
      decorationElements.push("\t\tgradient: ".concat(convertGradientToDart(container.decoration.gradient, context)));
    }

    if (container.decoration.shadows != null) {
      decorationElements.push("\t\tboxShadow: ".concat(convertShadowsToDart(container.decoration.shadows, context)));
    }
  }

  let containerCode = "new Container(\n        width: ".concat(container.width, ",\n        height: ").concat(container.height, ",\n        decoration: new BoxDecoration(\n          ").concat(decorationElements.join(",\n"), "\n        )\n      )"); // opacity is applied to the whole container, this way it affects its gradient (or color), border and shadows

  if (container.decoration.opacity != null && container.decoration.opacity < 1.0) {
    // we wrap the Opacity in a stack for the purpose of enabling the developer putting a widget inside
    // that is not affected by the opacity (the empty Container() inside Positioned.fill)
    containerCode = "Stack(\n            children: <Widget>[\n                Opacity(\n                    opacity: ".concat(container.decoration.opacity, ",\n                    child: ").concat(containerCode, ",\n                ),\n                Positioned.fill(\n                    child: Container(),\n                ),\n            ],\n            )");
  }

  return containerCode;
}
/**
 * 
 * @param {*} color 
 * @param {*} opacity 
 * @param {*} multipleColors 
 * @param {*} context 
 */


function convertColorToDart(color, opacity, multipleColors, context) {
  var space;

  if (multipleColors) {
    space = "\n      ";
  } else {
    space = "";
  }

  if (opacity < 1) {
    return "".concat(space, "Color(0x").concat(color.a).concat(color.r).concat(color.g).concat(color.b, ").withOpacity(").concat(opacity, ")");
  } // Evaluating if the color exists
  // If '' is returned the color does not exist


  var colorName = getColorNameFromProject(context, color); // Assigning the new color name 

  if (colorName != '') {
    return "".concat(space).concat(colorName);
  }

  return "".concat(space, "Color(0x").concat(color.a).concat(color.r).concat(color.g).concat(color.b, ")");
}
/**
 * 
 * @param {*} textSelected 
 */


function convertTextToDart(textSelected, context) {
  const textAlign = textSelected.textAlign == null ? "" : "\n    textAlign: TextAlign." + textSelected.textAlign + ",";
  return "new Text(".concat(JSON.stringify(textSelected.text), ",").concat(textAlign, "\n    style: ").concat(convertTextStyleToDart(textSelected.textStyle, context), "\n)");
}
/**
 * 
 * @param {*} textSelected 
 */


function convertTextSpanToDart(textSelected, context) {
  return "\n\tnew TextSpan(\n    text: ".concat(JSON.stringify(textSelected.text), ",\n    style: ").concat(convertTextStyleToDart(textSelected.textStyle, context), "\n    )");
}
/**
 * 
 * @param {*} textStyle 
 * @param {*} context
 */


function convertTextStyleToDart(textStyle, context) {
  var shadowElements;
  var letterSpacingElement; // Evaluating if shadow exists

  if (textStyle.shadows != null) {
    shadowElements = "shadows: ".concat(convertShadowsToDart(textStyle.shadows));
  } else {
    shadowElements = "";
  } // Evaluating if shadow exists


  if (textStyle.letterSpacing != null) {
    letterSpacingElement = "letterSpacing: ".concat(textStyle.letterSpacing, ",");
  } else {
    letterSpacingElement = "";
  }

  return "TextStyle(\n    fontFamily: '".concat(textStyle.fontFamily, "',\n    color: ").concat(convertColorToDart(textStyle.color, 1, false, context), ",\n    fontSize: ").concat(textStyle.fontSize, ",\n    fontWeight: FontWeight.w").concat(textStyle.fontWeight, ",\n    fontStyle: FontStyle.").concat(textStyle.fontStyle, ",\n    ").concat(letterSpacingElement, "\n    ").concat(shadowElements, "\n    )");
}

function angleToPoint(degrees) {
  return {
    x: Math.sin(degrees / 180.0 * Math.PI),
    y: -1.0 * Math.cos(degrees / 180.0 * Math.PI)
  };
}
/**
 * 
 * @param {*} gradient 
 * @param {*} context 
 */


function convertGradientToDart(gradient, context) {
  if (gradient.type === 'linear') {
    const angle = gradient.angle || 90;
    const end = angleToPoint(angle);
    const begin = {
      x: -end.x,
      y: -end.y
    };
    return "LinearGradient(\n    colors: [".concat(gradient.colors.map(colorHex => {
      return convertColorToDart(colorHex, 1, true, context);
    }), " ],\n    stops: [\n        ").concat(gradient.stops.join(",\n\t\t\t\t"), "\n    ],\n    begin: Alignment(").concat(begin.x.toFixed(2), ", ").concat(begin.y.toFixed(2), "),\n    end: Alignment(").concat(end.x.toFixed(2), ", ").concat(end.y.toFixed(2), "),\n    // angle: ").concat(gradient.angle, ",\n    // scale: ").concat(gradient.scale, ",\n    )");
  } else if (gradient.type === 'radial') {
    return "RadialGradient(colors: [".concat(gradient.colors.map(colorHex => {
      return convertColorToDart(colorHex, 1, true, context);
    }), " ],\n    stops: [\n        ").concat(gradient.stops.join(",\n\t\t\t\t"), "\n    ]\n    )");
  }

  return "";
}
/**
 * 
 * @param {*} shadows 
 * @param {*} context 
 */


function convertShadowsToDart(shadows, context) {
  return "[".concat(shadows.map(shadow => {
    return convertBoxShadowToDart(shadow, context);
  }), " ],\n");
}
/**
 * 
 * @param {*} shadow 
 * @param {*} context 
 */


function convertBoxShadowToDart(shadow, context) {
  return "BoxShadow(\n        color: ".concat(convertColorToDart(shadow.color, 1, false, context), ",\n        offset: Offset(").concat(shadow.offsetx, ",").concat(shadow.offsety, "),\n        blurRadius: ").concat(shadow.blurRadius, ",\n        spreadRadius: ").concat(shadow.spreadRadius, "\n    )");
}
/**
 * 
 * @param {*} border 
 * @param {*} context 
 */


function convertBorderToDart(border, context) {
  return "Border.all(\n      color: ".concat(convertColorToDart(border.color, 1, false, context), ",\n      width: ").concat(border.width, "\n    )");
}
/**
 * 
 * @param {*} context 
 */


function convertColorsListToDart(context) {
  colors = [];
  context.project.colors.map(colorMap => {
    colors.push("const Color ".concat(colorMap.name, " = const ").concat(convertColorToDart(new Color(colorMap.toHex().r, colorMap.toHex().g, colorMap.toHex().b, colorMap.toHex().a), 1, false), ";"));
  });
  return colors;
}
/**
 * 
 * @param {*} context 
 */


function convertTextStylesListToDart(context) {
  textStyles = [];
  context.project.textStyles.map(textStyleMap => {
    textStyles.push("const TextStyle ".concat(textStyleMap.name.replace(/\s/g, ''), " = const ").concat(convertTextStyleToDart(new TextStyle(textStyleMap.fontFamily, new Color(textStyleMap.color.toHex().r, textStyleMap.color.toHex().g, textStyleMap.color.toHex().b, textStyleMap.color.toHex().a), textStyleMap.fontSize, textStyleMap.fontWeight, textStyleMap.fontStyle, textStyleMap.letterSpacing, textStyleMap.lineHeight, getShadows(context, [])), context), ";"));
  });
  return textStyles;
}
/**
 * 
 * @param {*} textSpans 
 */


function convertRichTextToDart(textSpans, textAlign, context) {
  textAlign = textAlign == null ? "" : "\n    textAlign: TextAlign." + textAlign + ",";
  return "RichText(".concat(textAlign, "\n    text: new TextSpan(\n    children: [\n    ").concat(textSpans.map(textSpan => {
    return convertTextSpanToDart(textSpan, context);
  }), ",\n    ]\n  )\n)");
}
/*
The functions below are used to create all
the Widget Objects from Flutter, this part try organize
better the final code 
*/

/**
 * 
 * @param {*} color 
 * @param {*} offsetx 
 * @param {*} offsety 
 * @param {*} blurRadius 
 * @param {*} spreadRadius 
 */


function BoxShadow(color, offsetx, offsety, blurRadius, spreadRadius) {
  this.color = color;
  this.offsetx = offsetx;
  this.offsety = offsety;
  this.blurRadius = blurRadius;
  this.spreadRadius = spreadRadius;
}
/**
 * 
 * @param {*} type 
 * @param {*} colors 
 * @param {*} stops 
 * @param {*} angle 
 * @param {*} scale 
 */


function Gradient(type, colors, stops, angle, scale) {
  this.type = type;
  this.colors = colors;
  this.stops = stops;
  this.angle = angle;
  this.scale = scale;
}
/**
 * 
 * @param {*} color 
 * @param {*} width 
 */
// Border Flutter


function Border(color, width) {
  this.color = color;
  this.width = width;
} // This is a function to model Color from DART object


function Color(r, g, b, a) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}

function equalsColor(color1, color2) {
  if (color1.r == color2.r && color1.g == color2.g && color1.b == color2.b && color1.a == color2.a) return true;
  return false;
}
/**
 * 
 * @param {*} width 
 * @param {*} height 
 * @param {*} decoration 
 */
// This is a function to model Shape as DART Container Flutter


function Container(width, height, decoration) {
  this.width = width;
  this.height = height;
  this.decoration = decoration;
}
/**
 * 
 * @param {*} color 
 * @param {*} border 
 * @param {*} borderRadius 
 * @param {*} shadows 
 * @param {*} gradient 
 * @param {*} opacity 
 */
// This is a function to model BoxDecoration in Flutter


function BoxDecoration(color, border, borderRadius, shadows, gradient, opacity) {
  this.color = color;
  this.border = border;
  this.borderRadius = borderRadius;
  this.shadows = shadows;
  this.gradient = gradient;
  this.opacity = opacity;
}
/**
 * 
 * @param {*} text 
 * @param {*} textAlign 
 * @param {*} textStyle 
 */
// This is a funtion to model Text in Flutter


function Text(text, textAlign, textStyle) {
  this.text = text;
  this.textAlign = textAlign;
  this.textStyle = textStyle;
}
/**
 * 
 * @param {*} fontFamily 
 * @param {*} color 
 * @param {*} fontSize 
 * @param {*} fontWeight 
 * @param {*} fontStyle 
 * @param {*} letterSpacing 
 * @param {*} height 
 * @param {*} shadows 
 */
// This is a function to model TextStyle in Flutter


function TextStyle(fontFamily, color, fontSize, fontWeight, fontStyle, letterSpacing, height, shadows) {
  this.fontFamily = fontFamily;
  this.color = color;
  this.fontSize = fontSize;
  this.fontWeight = fontWeight;
  this.fontStyle = fontStyle;
  this.letterSpacing = letterSpacing;
  this.height = height;
  this.shadows = shadows;
}
/*
The functions below are used as common functions
*/

/**
 * 
 * @param {*} context 
 * @param {*} layer 
 */


function layerHasGradient(context, layer) {
  return layer.fills.some(f => f.type === "gradient");
}

/* harmony default export */ __webpack_exports__["default"] = ({
  layer,
  screen,
  component,
  colors,
  textStyles,
  exportColors,
  exportTextStyles // styleguideColors,
  // styleguideTextStyles,
  // exportStyleguideColors,
  // exportStyleguideTextStyles,
  // comment

});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(12);
var toIntegerOrInfinity = __webpack_require__(56);
var thisNumberValue = __webpack_require__(62);
var $repeat = __webpack_require__(63);
var fails = __webpack_require__(6);

var RangeError = global.RangeError;
var String = global.String;
var floor = Math.floor;
var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var un$ToFixed = uncurryThis(1.0.toFixed);

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = fails(function () {
  return un$ToFixed(0.00008, 3) !== '0.000' ||
    un$ToFixed(0.9, 0) !== '1' ||
    un$ToFixed(1.255, 2) !== '1.25' ||
    un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
}) || !fails(function () {
  // V8 ~ Android 4.3-
  un$ToFixed({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat('0', fractDigits - k) + result
        : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getOwnPropertyDescriptor = __webpack_require__(4).f;
var createNonEnumerableProperty = __webpack_require__(40);
var redefine = __webpack_require__(43);
var setGlobal = __webpack_require__(34);
var copyConstructorProperties = __webpack_require__(50);
var isForced = __webpack_require__(61);

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var call = __webpack_require__(7);
var propertyIsEnumerableModule = __webpack_require__(8);
var createPropertyDescriptor = __webpack_require__(9);
var toIndexedObject = __webpack_require__(10);
var toPropertyKey = __webpack_require__(15);
var hasOwn = __webpack_require__(35);
var IE8_DOM_DEFINE = __webpack_require__(38);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(11);
var requireObjectCoercible = __webpack_require__(14);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(12);
var fails = __webpack_require__(6);
var classof = __webpack_require__(13);

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(16);
var isSymbol = __webpack_require__(19);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var call = __webpack_require__(7);
var isObject = __webpack_require__(17);
var isSymbol = __webpack_require__(19);
var getMethod = __webpack_require__(26);
var ordinaryToPrimitive = __webpack_require__(29);
var wellKnownSymbol = __webpack_require__(30);

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(18);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var getBuiltIn = __webpack_require__(20);
var isCallable = __webpack_require__(18);
var isPrototypeOf = __webpack_require__(21);
var USE_SYMBOL_AS_UID = __webpack_require__(22);

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(18);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(23);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(24);
var fails = __webpack_require__(6);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var userAgent = __webpack_require__(25);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(27);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(18);
var tryToString = __webpack_require__(28);

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var call = __webpack_require__(7);
var isCallable = __webpack_require__(18);
var isObject = __webpack_require__(17);

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var shared = __webpack_require__(31);
var hasOwn = __webpack_require__(35);
var uid = __webpack_require__(37);
var NATIVE_SYMBOL = __webpack_require__(23);
var USE_SYMBOL_AS_UID = __webpack_require__(22);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(32);
var store = __webpack_require__(33);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var setGlobal = __webpack_require__(34);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);
var toObject = __webpack_require__(36);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var requireObjectCoercible = __webpack_require__(14);

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var fails = __webpack_require__(6);
var createElement = __webpack_require__(39);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(17);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var definePropertyModule = __webpack_require__(41);
var createPropertyDescriptor = __webpack_require__(9);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(38);
var anObject = __webpack_require__(42);
var toPropertyKey = __webpack_require__(15);

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isObject = __webpack_require__(17);

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(18);
var hasOwn = __webpack_require__(35);
var createNonEnumerableProperty = __webpack_require__(40);
var setGlobal = __webpack_require__(34);
var inspectSource = __webpack_require__(44);
var InternalStateModule = __webpack_require__(45);
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(49).CONFIGURABLE;

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);
var isCallable = __webpack_require__(18);
var store = __webpack_require__(33);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(46);
var global = __webpack_require__(3);
var uncurryThis = __webpack_require__(12);
var isObject = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(40);
var hasOwn = __webpack_require__(35);
var shared = __webpack_require__(33);
var sharedKey = __webpack_require__(47);
var hiddenKeys = __webpack_require__(48);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var isCallable = __webpack_require__(18);
var inspectSource = __webpack_require__(44);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31);
var uid = __webpack_require__(37);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var hasOwn = __webpack_require__(35);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(35);
var ownKeys = __webpack_require__(51);
var getOwnPropertyDescriptorModule = __webpack_require__(4);
var definePropertyModule = __webpack_require__(41);

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);
var uncurryThis = __webpack_require__(12);
var getOwnPropertyNamesModule = __webpack_require__(52);
var getOwnPropertySymbolsModule = __webpack_require__(60);
var anObject = __webpack_require__(42);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(59);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);
var hasOwn = __webpack_require__(35);
var toIndexedObject = __webpack_require__(10);
var indexOf = __webpack_require__(54).indexOf;
var hiddenKeys = __webpack_require__(48);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(55);
var lengthOfArrayLike = __webpack_require__(57);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(56);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(58);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(56);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 60 */
/***/ (function(module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var isCallable = __webpack_require__(18);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = uncurryThis(1.0.valueOf);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var toIntegerOrInfinity = __webpack_require__(56);
var toString = __webpack_require__(64);
var requireObjectCoercible = __webpack_require__(14);

var RangeError = global.RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var classof = __webpack_require__(65);

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var TO_STRING_TAG_SUPPORT = __webpack_require__(66);
var isCallable = __webpack_require__(18);
var classofRaw = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(30);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(30);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2);
var exec = __webpack_require__(68);

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(12);
var toString = __webpack_require__(64);
var regexpFlags = __webpack_require__(69);
var stickyHelpers = __webpack_require__(70);
var shared = __webpack_require__(31);
var create = __webpack_require__(71);
var getInternalState = __webpack_require__(45).get;
var UNSUPPORTED_DOT_ALL = __webpack_require__(75);
var UNSUPPORTED_NCG = __webpack_require__(76);

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(42);

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(42);
var defineProperties = __webpack_require__(72);
var enumBugKeys = __webpack_require__(59);
var hiddenKeys = __webpack_require__(48);
var html = __webpack_require__(74);
var documentCreateElement = __webpack_require__(39);
var sharedKey = __webpack_require__(47);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var definePropertyModule = __webpack_require__(41);
var anObject = __webpack_require__(42);
var toIndexedObject = __webpack_require__(10);
var objectKeys = __webpack_require__(73);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(53);
var enumBugKeys = __webpack_require__(59);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(20);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(6);
var global = __webpack_require__(3);

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(78);
var call = __webpack_require__(7);
var uncurryThis = __webpack_require__(12);
var fixRegExpWellKnownSymbolLogic = __webpack_require__(79);
var fails = __webpack_require__(6);
var anObject = __webpack_require__(42);
var isCallable = __webpack_require__(18);
var toIntegerOrInfinity = __webpack_require__(56);
var toLength = __webpack_require__(58);
var toString = __webpack_require__(64);
var requireObjectCoercible = __webpack_require__(14);
var advanceStringIndex = __webpack_require__(80);
var getMethod = __webpack_require__(26);
var getSubstitution = __webpack_require__(82);
var regExpExec = __webpack_require__(83);
var wellKnownSymbol = __webpack_require__(30);

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),
/* 78 */
/***/ (function(module, exports) {

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (bind ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(67);
var uncurryThis = __webpack_require__(12);
var redefine = __webpack_require__(43);
var regexpExec = __webpack_require__(68);
var fails = __webpack_require__(6);
var wellKnownSymbol = __webpack_require__(30);
var createNonEnumerableProperty = __webpack_require__(40);

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(81).charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);
var toIntegerOrInfinity = __webpack_require__(56);
var toString = __webpack_require__(64);
var requireObjectCoercible = __webpack_require__(14);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(12);
var toObject = __webpack_require__(36);

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var call = __webpack_require__(7);
var anObject = __webpack_require__(42);
var isCallable = __webpack_require__(18);
var classof = __webpack_require__(13);
var regexpExec = __webpack_require__(68);

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRlbnNpb24vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2V4dGVuc2lvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIudG8tZml4ZWQuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWNhbGxhYmxlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1jYWxsYWJsZS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtdW5zdXBwb3J0ZWQtZG90LWFsbC5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXVuc3VwcG9ydGVkLW5jZy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwid2VicGFjazovL2V4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1hcHBseS5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly9leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1zdWJzdGl0dXRpb24uanMiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIl0sIm5hbWVzIjpbImxheWVyIiwiY29udGV4dCIsInNlbGVjdGVkTGF5ZXIiLCJ0eXBlIiwiYm9keSIsImdldFRleHRFbGVtZW50IiwiY29kZSIsImxhbmd1YWdlIiwiY29udGFpbmVyIiwiZ2V0Q29udGFpbmVyIiwiY29udmVydENvbnRhaW5lclRvRGFydCIsImNvbG9ycyIsImNvbnZlcnRDb2xvcnNMaXN0VG9EYXJ0Iiwiam9pbiIsInRleHRTdHlsZXMiLCJjb252ZXJ0VGV4dFN0eWxlc0xpc3RUb0RhcnQiLCJleHBvcnRDb2xvcnMiLCJkYXJ0Q29kZSIsImZpbGVuYW1lIiwicHJvamVjdCIsIm5hbWUiLCJleHBvcnRUZXh0U3R5bGVzIiwic2NyZWVuIiwic2VsZWN0ZWRWZXJzaW9uIiwic2VsZWN0ZWRTY3JlZW4iLCJjb21wb25lbnQiLCJzZWxlY3RlZENvbXBvbmVudCIsImJ1aWxkaW5nQm94RGVjb3JhdGlvbiIsImRlY29yYXRpb24iLCJCb3hEZWNvcmF0aW9uIiwiZmlsbHMiLCJsZW5ndGgiLCJncmFkaWVudCIsImdldEdyYWRpZW50IiwiY29sb3IiLCJDb2xvciIsInRvSGV4IiwiciIsImciLCJiIiwiYSIsImJvcmRlciIsImdldEJvcmRlciIsImJvcmRlclJhZGl1cyIsInNoYWRvd3MiLCJnZXRTaGFkb3dzIiwib3BhY2l0eSIsInRleHRTcGFucyIsIm1hcCIsInRleHRTcGFuIiwicHVzaCIsIlRleHQiLCJjb250ZW50Iiwic3Vic3RyaW5nIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsIlRleHRTdHlsZSIsInRleHRTdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250U3R5bGUiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsImNvbnZlcnRSaWNoVGV4dFRvRGFydCIsInRleHRBbGlnbiIsImNvbnZlcnRUZXh0VG9EYXJ0IiwiZ2V0Q29sb3JOYW1lRnJvbVByb2plY3QiLCJjb2xvck5hbWUiLCJjb2xvck1hcCIsImRhcnRDb2xvciIsImVxdWFsc0NvbG9yIiwiQ29udGFpbmVyIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwibGF5ZXJIYXNHcmFkaWVudCIsIkdyYWRpZW50IiwiY29sb3JTdG9wcyIsInBvc2l0aW9uIiwiYW5nbGUiLCJib3JkZXJzIiwibGFzdEJvcmRlciIsImZpbGwiLCJCb3JkZXIiLCJ0aGlja25lc3MiLCJzaGFkb3ciLCJCb3hTaGFkb3ciLCJvZmZzZXRYIiwib2Zmc2V0WSIsImJsdXJSYWRpdXMiLCJzcHJlYWQiLCJkZWNvcmF0aW9uRWxlbWVudHMiLCJjb252ZXJ0Q29sb3JUb0RhcnQiLCJjb252ZXJ0Qm9yZGVyVG9EYXJ0IiwiY29udmVydEdyYWRpZW50VG9EYXJ0IiwiY29udmVydFNoYWRvd3NUb0RhcnQiLCJjb250YWluZXJDb2RlIiwibXVsdGlwbGVDb2xvcnMiLCJzcGFjZSIsInRleHRTZWxlY3RlZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwiY29udmVydFRleHRTdHlsZVRvRGFydCIsImNvbnZlcnRUZXh0U3BhblRvRGFydCIsInNoYWRvd0VsZW1lbnRzIiwibGV0dGVyU3BhY2luZ0VsZW1lbnQiLCJhbmdsZVRvUG9pbnQiLCJkZWdyZWVzIiwieCIsIk1hdGgiLCJzaW4iLCJQSSIsInkiLCJjb3MiLCJiZWdpbiIsImNvbG9ySGV4Iiwic3RvcHMiLCJ0b0ZpeGVkIiwic2NhbGUiLCJjb252ZXJ0Qm94U2hhZG93VG9EYXJ0Iiwib2Zmc2V0eCIsIm9mZnNldHkiLCJzcHJlYWRSYWRpdXMiLCJ0ZXh0U3R5bGVNYXAiLCJyZXBsYWNlIiwiY29sb3IxIiwiY29sb3IyIiwic29tZSIsImYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIGxheWVyKGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpIHtcbiAgICBzd2l0Y2goc2VsZWN0ZWRMYXllci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgLy8gR2V0dGluZyB0ZXh0IGluZm9ybWF0aW9uIGZvciBvbmUgc3BlY2lmaWMgVGV4dFN0eWxlXG4gICAgICAgICAgICB2YXIgYm9keSA9IGdldFRleHRFbGVtZW50KGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGU6IGAke2JvZHl9YCxcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogXCJkYXJ0XCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2hhcGUnOlxuICAgICAgICAgICAgLy8gR2V0dGluZyBzaGFwZSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcihjb250ZXh0LCBzZWxlY3RlZExheWVyKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjb252ZXJ0Q29udGFpbmVyVG9EYXJ0KGNvbnRhaW5lciwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdkYXJ0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgICAgLy8gTWlzc2luZyB0byBpbXBsZW1lbnQsIGl0IHdpbGwgaW4gZnV0dXJlIHZlcnNpb25zXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGU6IGBncm91cGAsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6ICdkYXJ0J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgXG4gICAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbG9ycyhjb250ZXh0KSB7XG4gICAgLy8gTWFwcGluZyBjb2xvcnMgZnJvbSBjb250ZXh0LnByb2plY3RcbiAgICB2YXIgYm9keSA9IGNvbnZlcnRDb2xvcnNMaXN0VG9EYXJ0KGNvbnRleHQpLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogYm9keSxcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZGFydFwiXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHRleHRTdHlsZXMoY29udGV4dCkge1xuICAgIC8vIE1hcHBpbmcgdGV4dFN0eWxlcyBmcm9tIGNvbnRleHQucHJvamVjdFxuICAgIHJldHVybiB7XG4gICAgICAgIGNvZGU6IGNvbnZlcnRUZXh0U3R5bGVzTGlzdFRvRGFydChjb250ZXh0KS5qb2luKFwiXFxuXCIpLFxuICAgICAgICBsYW5ndWFnZTogXCJkYXJ0XCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGV4cG9ydENvbG9ycyhjb250ZXh0KSB7XG4gICAgLy8gRXhwb3J0aW5nIGNvbG9yIHRvIERBUlQgZmlsZVxuICAgIHZhciBkYXJ0Q29kZSA9IGBpbXBvcnQgJ3BhY2thZ2U6Zmx1dHRlci9tYXRlcmlhbC5kYXJ0JztcXG5cbiR7Y29udmVydENvbG9yc0xpc3RUb0RhcnQoY29udGV4dCkuam9pbihcIlxcblwiKX1gO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBjb2RlOiBkYXJ0Q29kZSxcbiAgICAgICAgZmlsZW5hbWU6IGAke2NvbnRleHQucHJvamVjdC5uYW1lfUNvbG9ycy5kYXJ0YCxcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZGFydFwiXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGV4cG9ydFRleHRTdHlsZXMoY29udGV4dCkge1xuICAgIC8vIEV4cG9ydGluZyB0ZXh0U3R5bGUgdG8gREFSVCBmaWxlXG4gICAgdmFyIGRhcnRDb2RlID0gYGltcG9ydCAncGFja2FnZTpmbHV0dGVyL21hdGVyaWFsLmRhcnQnO1xcblxuJHtjb252ZXJ0VGV4dFN0eWxlc0xpc3RUb0RhcnQoY29udGV4dCkuam9pbihcIlxcblwiKX1gO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBjb2RlOiBkYXJ0Q29kZSxcbiAgICAgICAgZmlsZW5hbWU6IGAke2NvbnRleHQucHJvamVjdC5uYW1lfVRleHRTdHlsZXMuZGFydGAsXG4gICAgICAgIGxhbmd1YWdlOiBcImRhcnRcIlxuICAgIH1cbn1cblxuZnVuY3Rpb24gc2NyZWVuKGNvbnRleHQsIHNlbGVjdGVkVmVyc2lvbiwgc2VsZWN0ZWRTY3JlZW4pIHtcbiAgICByZXR1cm57XG4gICAgICAgIGNvZGU6ICdDb29taW5nIHNvb24nLFxuICAgICAgICBmaWxlbmFtZTogYCR7Y29udGV4dC5wcm9qZWN0Lm5hbWV9VGV4dFN0eWxlcy5kYXJ0YCxcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZGFydFwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgc2VsZWN0ZWRWZXJzaW9uLCBzZWxlY3RlZENvbXBvbmVudCkge1xuICAgIHJldHVybntcbiAgICAgICAgY29kZTogJ0Nvb21pbmcgc29vbi4uLicsXG4gICAgICAgIGZpbGVuYW1lOiBgJHtjb250ZXh0LnByb2plY3QubmFtZX1UZXh0U3R5bGVzLmRhcnRgLFxuICAgICAgICBsYW5ndWFnZTogXCJkYXJ0XCJcbiAgICB9XG59XG5cblxuXG4vLyAvKipcbi8vICAqIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIHdpbGwgYmUgZGVwcmVjYXRlZC4gWW91ciBleHRlbnNpb25zIGNhbiBleHBvcnQgdGhlbSB0byBzdXBwb3J0IG9sZCB2ZXJzaW9ucyBvZiBaZXBsaW4ncyBtYWNPUyBhcHAuXG4vLyAgKiBTZWUgWmVwbGluIEV4dGVuc2lvbnMgbWlncmF0aW9uIGd1aWRlIGZvciBkZXRhaWxzOlxuLy8gICogaHR0cHM6Ly96cGwuaW8vc2hhcmVkLXN0eWxlZ3VpZGVzLWV4dGVuc2lvbnMtbWlncmF0aW9uLWd1aWRlXG4vLyAgKi9cblxuLy8gZnVuY3Rpb24gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHtcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBzdHlsZWd1aWRlVGV4dFN0eWxlcyhjb250ZXh0LCB0ZXh0U3R5bGVzKSB7XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gZXhwb3J0U3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHtcblxuLy8gfVxuXG4vLyBmdW5jdGlvbiBleHBvcnRTdHlsZWd1aWRlVGV4dFN0eWxlcyhjb250ZXh0LCB0ZXh0U3R5bGVzKSB7XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gY29tbWVudChjb250ZXh0LCB0ZXh0KSB7XG5cbi8vIH1cblxuXG4vKlxuVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgdXNlZCBmb3IgZ2VuZXJhdGUgRmx1dHRlciBXaWRnZXRzLFxuQ29udGFpbmVyLCBCb3hEZWNvcmF0aW9uLCBTaGFkb3dzLCBldGMuIFxuKi9cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqIEBwYXJhbSB7Kn0gbGF5ZXIgXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkaW5nQm94RGVjb3JhdGlvbihjb250ZXh0LCBsYXllcil7XG4gICAgLy8gR2V0dGluZyBhIG5ldyBkZWNvcmF0aW9uIEJveFxuICAgIHZhciBkZWNvcmF0aW9uID0gbmV3IEJveERlY29yYXRpb24oKTtcblxuICAgIC8vIEV2YWx1YXRpbmcgaWYgdGhlIHNlbGVjdGVkIGxheWVyIGhhcyBGaWxsc1xuXG4gICAgaWYgKGxheWVyLmZpbGxzLmxlbmd0aD4wKVxuICAgIHtcbiAgICAgICAgLy8gR2V0dGluZyBncmFkaWVudCBcbiAgICAgICAgZGVjb3JhdGlvbi5ncmFkaWVudCA9IGdldEdyYWRpZW50KGNvbnRleHQsIGxheWVyKTtcblxuICAgICAgICAvLyBXaXRob3V0IGdyYWRpZW50XG4gICAgICAgIGlmIChkZWNvcmF0aW9uLmdyYWRpZW50ID09IG51bGwpe1xuICAgICAgICAgICAgLy8gV2l0aG91dCBHcmFkaWVudFxuICAgICAgICAgICAgZGVjb3JhdGlvbi5jb2xvciA9IG5ldyBDb2xvcihcbiAgICAgICAgICAgICAgICBsYXllci5maWxsc1tsYXllci5maWxscy5sZW5ndGggLTFdLmNvbG9yLnRvSGV4KCkuciwgXG4gICAgICAgICAgICAgICAgbGF5ZXIuZmlsbHNbbGF5ZXIuZmlsbHMubGVuZ3RoIC0xXS5jb2xvci50b0hleCgpLmcsIFxuICAgICAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uY29sb3IudG9IZXgoKS5iLFxuICAgICAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uY29sb3IudG9IZXgoKS5hXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEdldHRpbmcgQm9yZGVyXG4gICAgZGVjb3JhdGlvbi5ib3JkZXIgPSBnZXRCb3JkZXIoY29udGV4dCwgbGF5ZXIpO1xuXG4gICAgLy8gQXNzaWduaW5nIGJvcmRlclJhZGl1c1xuICAgIGlmIChsYXllci5ib3JkZXJSYWRpdXMgIT0gMClcbiAgICB7XG4gICAgICAgIGRlY29yYXRpb24uYm9yZGVyUmFkaXVzID0gbGF5ZXIuYm9yZGVyUmFkaXVzO1xuICAgIH1cblxuICAgIC8vIEdldHRpbmcgU2hhZG93c1xuICAgIGRlY29yYXRpb24uc2hhZG93cyA9IGdldFNoYWRvd3MoY29udGV4dCwgbGF5ZXIuc2hhZG93cyk7XG5cblxuICAgIC8vIEFkZGluZyBPcGFjaXR5IHRvIHRoZSBMYXllclxuICAgIGRlY29yYXRpb24ub3BhY2l0eSA9IGxheWVyLm9wYWNpdHk7XG4gICAgcmV0dXJuIGRlY29yYXRpb247XG5cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqIEBwYXJhbSB7Kn0gbGF5ZXIgXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRFbGVtZW50KGNvbnRleHQsIGxheWVyKXtcbiAgICB2YXIgYm9keTtcbiAgICBpZiAobGF5ZXIudGV4dFN0eWxlcy5sZW5ndGggPiAxKXtcbiAgICAgICAgLy8gTGlzdCBvZiBUZXh0U3BhbnNcbiAgICAgICAgdmFyIHRleHRTcGFucyA9IFtdO1xuICAgICAgICBsYXllci50ZXh0U3R5bGVzLm1hcChcbiAgICAgICAgICAgIHRleHRTcGFuID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0U3BhbnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRleHQoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jb250ZW50LnN1YnN0cmluZyh0ZXh0U3Bhbi5yYW5nZS5zdGFydCwgdGV4dFNwYW4ucmFuZ2UuZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLmNvbG9yLnRvSGV4KCkuciwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5jb2xvci50b0hleCgpLmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5jb2xvci50b0hleCgpLmIsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUuY29sb3IudG9IZXgoKS5hKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLmZvbnRXZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLmZvbnRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUubGV0dGVyU3BhY2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUubGluZUhlaWdodCAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U2hhZG93cyhjb250ZXh0LCBsYXllci5zaGFkb3dzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGJvZHkgPSBjb252ZXJ0UmljaFRleHRUb0RhcnQodGV4dFNwYW5zLCBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS50ZXh0QWxpZ24sIGNvbnRleHQpO1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKGxheWVyLnRleHRTdHlsZXMubGVuZ3RoID09IDEpXG4gICAge1xuICAgICAgICBib2R5ID0gY29udmVydFRleHRUb0RhcnQobmV3IFRleHQobGF5ZXIuY29udGVudCwgXG4gICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS50ZXh0QWxpZ24sXG4gICAgICAgICAgICBuZXcgVGV4dFN0eWxlKFxuICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmZvbnRGYW1pbHksXG4gICAgICAgICAgICAgICAgbmV3IENvbG9yKFxuICAgICAgICAgICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS5jb2xvci50b0hleCgpLnIsIFxuICAgICAgICAgICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS5jb2xvci50b0hleCgpLmcsXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmNvbG9yLnRvSGV4KCkuYiwgXG4gICAgICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmNvbG9yLnRvSGV4KCkuYSksXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUuZm9udFdlaWdodCxcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS5mb250U3R5bGUsXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUubGV0dGVyU3BhY2luZyxcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS5saW5lSGVpZ2h0ICxcbiAgICAgICAgICAgICAgICBnZXRTaGFkb3dzKGNvbnRleHQsIGxheWVyLnNoYWRvd3MpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSwgY29udGV4dFxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBib2R5O1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IGhhcyBhbGwgZWxlbWVudHMgZnJvbSB0aGUgZW50aXJlIHByb2plY3RcbiAqIEBwYXJhbSB7Kn0gY29sb3IgdG8gZXZhbHVhdGUgaWYgZXhpc3RzIG9uIHRoZSBwcm9qZWN0IFxuICovXG5mdW5jdGlvbiBnZXRDb2xvck5hbWVGcm9tUHJvamVjdChjb250ZXh0LCBjb2xvcil7XG4gICAgLy8gVGhlIGNvbG9yIG11c3QgYmUgdGhlIG9iamVjdCBmcm9tIFplcGxpIE1vZGVsIG5vdCBEQVJUXG4gICAgY29sb3JzID0gW107XG4gICAgdmFyIGNvbG9yTmFtZSA9ICcnO1xuICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byBldmFsdWF0ZSBiZWZvcmUgbWFwIHRoZSBjb2xvcnNcbiAgICAvLyBpZiB0aGUgY29udGV4dCBpcyBub3QgbnVsbFxuICAgIGlmKGNvbnRleHQgIT0gbnVsbCl7XG4gICAgICAgIGNvbnRleHQucHJvamVjdC5jb2xvcnMubWFwKFxuICAgICAgICAgICAgY29sb3JNYXAgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEV2YWx1YXRpbmcgaWYgdGhlIGNvbG9yIGV4aXN0cyBmb3IgdGhlIHByb2plY3RcbiAgICAgICAgICAgICAgICB2YXIgZGFydENvbG9yID0gbmV3IENvbG9yKGNvbG9yTWFwLnRvSGV4KCkuciwgY29sb3JNYXAudG9IZXgoKS5nLGNvbG9yTWFwLnRvSGV4KCkuYiwgY29sb3JNYXAudG9IZXgoKS5hKVxuICAgICAgICAgICAgICAgIC8vIEJvdGggY29sb3JzIG11c3QgYmUgb2JqZWN0IGRhcnQgY29sb3JzIG1vZGVsXG4gICAgICAgICAgICAgICAgaWYgKGVxdWFsc0NvbG9yKGRhcnRDb2xvciwgY29sb3IpKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG5hbWUgb2YgdGhlIGNvbG9yIHdpbGwgc2hvdyBpbnN0ZWFkIG9mIGhleCBjb2RlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTmFtZSA9IGNvbG9yTWFwLm5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JOYW1lO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICogQHBhcmFtIHsqfSBsYXllciBcbiAqL1xuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRleHQsIGxheWVyKXtcbiAgICB2YXIgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcihsYXllci5yZWN0LndpZHRoLCBsYXllci5yZWN0LmhlaWdodCk7XG4gICAgY29udGFpbmVyLmRlY29yYXRpb24gPSBidWlsZGluZ0JveERlY29yYXRpb24oY29udGV4dCwgbGF5ZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICogQHBhcmFtIHsqfSBsYXllciBcbiAqL1xuZnVuY3Rpb24gZ2V0R3JhZGllbnQoY29udGV4dCwgbGF5ZXIpe1xuICAgIGlmKGxheWVySGFzR3JhZGllbnQoY29udGV4dCwgbGF5ZXIpKVxuICAgIHtcbiAgICAgICAgLy8gQnVpbGRpbmcgdGhlIEdyYWRpZW50XG4gICAgICAgIHJldHVybiBuZXcgR3JhZGllbnQoXG4gICAgICAgICAgICBsYXllci5maWxsc1tsYXllci5maWxscy5sZW5ndGggLTFdLmdyYWRpZW50LnR5cGUsXG4gICAgICAgICAgICAvLyBMaXN0IG9mIENvbG9yc1xuICAgICAgICAgICAgbGF5ZXIuZmlsbHNbbGF5ZXIuZmlsbHMubGVuZ3RoIC0xXS5ncmFkaWVudC5jb2xvclN0b3BzLm1hcChcbiAgICAgICAgICAgICAgICBjb2xvck1hcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IoY29sb3JNYXAuY29sb3IudG9IZXgoKS5yLCBjb2xvck1hcC5jb2xvci50b0hleCgpLmcsY29sb3JNYXAuY29sb3IudG9IZXgoKS5iLCBjb2xvck1hcC5jb2xvci50b0hleCgpLmEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAvLyBMaXN0IG9mIFN0b3BzXG4gICAgICAgICAgICBsYXllci5maWxsc1tsYXllci5maWxscy5sZW5ndGggLTFdLmdyYWRpZW50LmNvbG9yU3RvcHMubWFwKFxuICAgICAgICAgICAgICAgIGNvbG9yTWFwID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yTWFwLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBsYXllci5maWxsc1tsYXllci5maWxscy5sZW5ndGggLTFdLmdyYWRpZW50LmFuZ2xlLFxuXG4gICAgICAgICk7XG4gICAgICAgIFxuXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG59XG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICogQHBhcmFtIHsqfSBsYXllciBcbiAqL1xuZnVuY3Rpb24gZ2V0Qm9yZGVyKGNvbnRleHQsIGxheWVyKXtcblxuICAgIC8vIEFkZGluZyBTaGFkb3dzIHRvIHRoZSBMYXllclxuICAgIGlmKGxheWVyLmJvcmRlcnMubGVuZ3RoID4gMCl7XG4gICAgICAgIGNvbnN0IGxhc3RCb3JkZXIgPSBsYXllci5ib3JkZXJzW2xheWVyLmJvcmRlcnMubGVuZ3RoIC0xXTtcbiAgICAgICAgaWYgKGxhc3RCb3JkZXIuZmlsbCA9PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQm9yZGVyKFxuICAgICAgICAgICAgICAgIG5ldyBDb2xvcihcbiAgICAgICAgICAgICAgICAgICAgbGFzdEJvcmRlci5maWxsLmNvbG9yLnRvSGV4KCkuciwgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXIuZmlsbC5jb2xvci50b0hleCgpLmcsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb3JkZXIuZmlsbC5jb2xvci50b0hleCgpLmIsIFxuICAgICAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyLmZpbGwuY29sb3IudG9IZXgoKS5hXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBsYXN0Qm9yZGVyLnRoaWNrbmVzcyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0gXG5cbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqIEBwYXJhbSB7Kn0gc2hhZG93cyBcbiAqL1xuZnVuY3Rpb24gZ2V0U2hhZG93cyhjb250ZXh0LCBzaGFkb3dzKXtcbiAgICAvLyBBZGRpbmcgU2hhZG93cyB0byB0aGUgTGF5ZXJcbiAgICBpZihzaGFkb3dzLmxlbmd0aCA+IDApe1xuICAgICAgICByZXR1cm4gc2hhZG93cy5tYXAoIHNoYWRvdyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJveFNoYWRvdyhuZXcgQ29sb3IoXG4gICAgICAgICAgICAgICAgc2hhZG93LmNvbG9yLnRvSGV4KCkuciwgc2hhZG93LmNvbG9yLnRvSGV4KCkuZyxzaGFkb3cuY29sb3IudG9IZXgoKS5iLCBzaGFkb3cuY29sb3IudG9IZXgoKS5hKSxcbiAgICAgICAgICAgICAgICBzaGFkb3cub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICBzaGFkb3cub2Zmc2V0WSxcbiAgICAgICAgICAgICAgICBzaGFkb3cuYmx1clJhZGl1cyxcbiAgICAgICAgICAgICAgICBzaGFkb3cuc3ByZWFkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBlbHNle1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH0gXG5cbn1cblxuXG4vKlxuVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgdXNlZCB0byBnZW5lcmF0ZSBGbHV0dGVyIFdpZGdldHMgT2JqZWN0cyB0byBEQVJUIENPREUsXG4qL1xuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250YWluZXIgXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRDb250YWluZXJUb0RhcnQoY29udGFpbmVyLCBjb250ZXh0KXtcbiAgICB2YXIgZGVjb3JhdGlvbkVsZW1lbnRzID0gW107XG5cbiAgICBpZiAoY29udGFpbmVyLmRlY29yYXRpb24gIT0gbnVsbCl7XG4gICAgICAgIGlmIChjb250YWluZXIuZGVjb3JhdGlvbi5jb2xvciAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uRWxlbWVudHMucHVzaChgY29sb3I6ICR7Y29udmVydENvbG9yVG9EYXJ0KGNvbnRhaW5lci5kZWNvcmF0aW9uLmNvbG9yLCAxLCBmYWxzZSwgY29udGV4dCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRhaW5lci5kZWNvcmF0aW9uLmJvcmRlciAhPSBudWxsKVxuICAgICAgICB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uRWxlbWVudHMucHVzaChgYm9yZGVyOiAke2NvbnZlcnRCb3JkZXJUb0RhcnQoY29udGFpbmVyLmRlY29yYXRpb24uYm9yZGVyLCBjb250ZXh0KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGFpbmVyLmRlY29yYXRpb24uYm9yZGVyUmFkaXVzICE9IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRlY29yYXRpb25FbGVtZW50cy5wdXNoKGBcXHRcXHRib3JkZXJSYWRpdXM6IEJvcmRlclJhZGl1cy5jaXJjdWxhcigke2NvbnRhaW5lci5kZWNvcmF0aW9uLmJvcmRlclJhZGl1c30pYCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGNvbnRhaW5lci5kZWNvcmF0aW9uLmdyYWRpZW50ICE9IG51bGwpe1xuICAgICAgICAgICAgZGVjb3JhdGlvbkVsZW1lbnRzLnB1c2goYFxcdFxcdGdyYWRpZW50OiAke2NvbnZlcnRHcmFkaWVudFRvRGFydChjb250YWluZXIuZGVjb3JhdGlvbi5ncmFkaWVudCwgY29udGV4dCl9YCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYoY29udGFpbmVyLmRlY29yYXRpb24uc2hhZG93cyAhPSBudWxsKXtcbiAgICAgICAgICAgIGRlY29yYXRpb25FbGVtZW50cy5wdXNoKGBcXHRcXHRib3hTaGFkb3c6ICR7Y29udmVydFNoYWRvd3NUb0RhcnQoY29udGFpbmVyLmRlY29yYXRpb24uc2hhZG93cywgY29udGV4dCl9YCk7XG4gICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29udGFpbmVyQ29kZSA9IGBuZXcgQ29udGFpbmVyKFxuICAgICAgICB3aWR0aDogJHtjb250YWluZXIud2lkdGh9LFxuICAgICAgICBoZWlnaHQ6ICR7Y29udGFpbmVyLmhlaWdodH0sXG4gICAgICAgIGRlY29yYXRpb246IG5ldyBCb3hEZWNvcmF0aW9uKFxuICAgICAgICAgICR7ZGVjb3JhdGlvbkVsZW1lbnRzLmpvaW4oXCIsXFxuXCIpfVxuICAgICAgICApXG4gICAgICApYDtcblxuICAgIC8vIG9wYWNpdHkgaXMgYXBwbGllZCB0byB0aGUgd2hvbGUgY29udGFpbmVyLCB0aGlzIHdheSBpdCBhZmZlY3RzIGl0cyBncmFkaWVudCAob3IgY29sb3IpLCBib3JkZXIgYW5kIHNoYWRvd3NcbiAgICBpZiAoY29udGFpbmVyLmRlY29yYXRpb24ub3BhY2l0eSAhPSBudWxsICYmIGNvbnRhaW5lci5kZWNvcmF0aW9uLm9wYWNpdHkgPCAxLjApIHtcbiAgICAgICAgLy8gd2Ugd3JhcCB0aGUgT3BhY2l0eSBpbiBhIHN0YWNrIGZvciB0aGUgcHVycG9zZSBvZiBlbmFibGluZyB0aGUgZGV2ZWxvcGVyIHB1dHRpbmcgYSB3aWRnZXQgaW5zaWRlXG4gICAgICAgIC8vIHRoYXQgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBvcGFjaXR5ICh0aGUgZW1wdHkgQ29udGFpbmVyKCkgaW5zaWRlIFBvc2l0aW9uZWQuZmlsbClcbiAgICAgICAgY29udGFpbmVyQ29kZSA9IGBTdGFjayhcbiAgICAgICAgICAgIGNoaWxkcmVuOiA8V2lkZ2V0PltcbiAgICAgICAgICAgICAgICBPcGFjaXR5KFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAke2NvbnRhaW5lci5kZWNvcmF0aW9uLm9wYWNpdHl9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZDogJHtjb250YWluZXJDb2RlfSxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFBvc2l0aW9uZWQuZmlsbChcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQ6IENvbnRhaW5lcigpLFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgKWA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBjb250YWluZXJDb2RlO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb2xvciBcbiAqIEBwYXJhbSB7Kn0gb3BhY2l0eSBcbiAqIEBwYXJhbSB7Kn0gbXVsdGlwbGVDb2xvcnMgXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRDb2xvclRvRGFydChjb2xvciwgb3BhY2l0eSwgbXVsdGlwbGVDb2xvcnMsIGNvbnRleHQpe1xuXG4gICAgdmFyIHNwYWNlO1xuICAgIGlmIChtdWx0aXBsZUNvbG9ycyl7XG4gICAgICAgIHNwYWNlID0gIFwiXFxuICAgICAgXCI7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHNwYWNlPSBcIlwiO1xuICAgIH1cbiAgICBpZiAob3BhY2l0eSA8IDEpe1xuICAgICAgICByZXR1cm4gYCR7c3BhY2V9Q29sb3IoMHgke2NvbG9yLmF9JHtjb2xvci5yfSR7Y29sb3IuZ30ke2NvbG9yLmJ9KS53aXRoT3BhY2l0eSgke29wYWNpdHl9KWA7XG4gICAgfVxuICAgIC8vIEV2YWx1YXRpbmcgaWYgdGhlIGNvbG9yIGV4aXN0c1xuICAgIC8vIElmICcnIGlzIHJldHVybmVkIHRoZSBjb2xvciBkb2VzIG5vdCBleGlzdFxuICAgIHZhciBjb2xvck5hbWUgPSBnZXRDb2xvck5hbWVGcm9tUHJvamVjdChjb250ZXh0LCBjb2xvcik7XG4gICAgLy8gQXNzaWduaW5nIHRoZSBuZXcgY29sb3IgbmFtZSBcbiAgICBpZihjb2xvck5hbWUgIT0gJycpe1xuICAgICAgICByZXR1cm4gYCR7c3BhY2V9JHtjb2xvck5hbWV9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NwYWNlfUNvbG9yKDB4JHtjb2xvci5hfSR7Y29sb3Iucn0ke2NvbG9yLmd9JHtjb2xvci5ifSlgO1xuXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHRleHRTZWxlY3RlZCBcbiAqL1xuZnVuY3Rpb24gY29udmVydFRleHRUb0RhcnQodGV4dFNlbGVjdGVkLCBjb250ZXh0KXtcbiAgICBjb25zdCB0ZXh0QWxpZ24gPSAodGV4dFNlbGVjdGVkLnRleHRBbGlnbiA9PSBudWxsKSA/IFwiXCIgOlxuICAgICBcIlxcbiAgICB0ZXh0QWxpZ246IFRleHRBbGlnbi5cIiArIHRleHRTZWxlY3RlZC50ZXh0QWxpZ24gKyBcIixcIjtcbiAgICByZXR1cm4gYG5ldyBUZXh0KCR7SlNPTi5zdHJpbmdpZnkodGV4dFNlbGVjdGVkLnRleHQpfSwke3RleHRBbGlnbn1cbiAgICBzdHlsZTogJHtjb252ZXJ0VGV4dFN0eWxlVG9EYXJ0KHRleHRTZWxlY3RlZC50ZXh0U3R5bGUsIGNvbnRleHQpfVxuKWA7XG5cbn1cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHRleHRTZWxlY3RlZCBcbiAqL1xuZnVuY3Rpb24gY29udmVydFRleHRTcGFuVG9EYXJ0KHRleHRTZWxlY3RlZCwgY29udGV4dCl7XG5cbiAgICByZXR1cm4gYFxcblxcdG5ldyBUZXh0U3BhbihcbiAgICB0ZXh0OiAke0pTT04uc3RyaW5naWZ5KHRleHRTZWxlY3RlZC50ZXh0KX0sXG4gICAgc3R5bGU6ICR7Y29udmVydFRleHRTdHlsZVRvRGFydCh0ZXh0U2VsZWN0ZWQudGV4dFN0eWxlLCBjb250ZXh0KX1cbiAgICApYDtcblxufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gdGV4dFN0eWxlIFxuICogQHBhcmFtIHsqfSBjb250ZXh0XG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRUZXh0U3R5bGVUb0RhcnQodGV4dFN0eWxlLCBjb250ZXh0KXtcbiAgICB2YXIgc2hhZG93RWxlbWVudHM7XG4gICAgdmFyIGxldHRlclNwYWNpbmdFbGVtZW50O1xuXG4gICAgLy8gRXZhbHVhdGluZyBpZiBzaGFkb3cgZXhpc3RzXG4gICAgaWYgKHRleHRTdHlsZS5zaGFkb3dzICE9IG51bGwpXG4gICAge1xuICAgICAgICBzaGFkb3dFbGVtZW50cyA9IGBzaGFkb3dzOiAke2NvbnZlcnRTaGFkb3dzVG9EYXJ0KHRleHRTdHlsZS5zaGFkb3dzKX1gO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzaGFkb3dFbGVtZW50cyA9IFwiXCI7XG4gICAgfVxuXG4gICAgLy8gRXZhbHVhdGluZyBpZiBzaGFkb3cgZXhpc3RzXG4gICAgaWYgKHRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nICE9IG51bGwpXG4gICAge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nRWxlbWVudCA9IGBsZXR0ZXJTcGFjaW5nOiAke3RleHRTdHlsZS5sZXR0ZXJTcGFjaW5nfSxgO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBsZXR0ZXJTcGFjaW5nRWxlbWVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBUZXh0U3R5bGUoXG4gICAgZm9udEZhbWlseTogJyR7dGV4dFN0eWxlLmZvbnRGYW1pbHl9JyxcbiAgICBjb2xvcjogJHtjb252ZXJ0Q29sb3JUb0RhcnQodGV4dFN0eWxlLmNvbG9yLCAxLCBmYWxzZSwgY29udGV4dCl9LFxuICAgIGZvbnRTaXplOiAke3RleHRTdHlsZS5mb250U2l6ZX0sXG4gICAgZm9udFdlaWdodDogRm9udFdlaWdodC53JHt0ZXh0U3R5bGUuZm9udFdlaWdodH0sXG4gICAgZm9udFN0eWxlOiBGb250U3R5bGUuJHt0ZXh0U3R5bGUuZm9udFN0eWxlfSxcbiAgICAke2xldHRlclNwYWNpbmdFbGVtZW50fVxuICAgICR7c2hhZG93RWxlbWVudHN9XG4gICAgKWA7XG5cbn1cblxuZnVuY3Rpb24gYW5nbGVUb1BvaW50KGRlZ3JlZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBNYXRoLnNpbihkZWdyZWVzIC8gMTgwLjAgKiBNYXRoLlBJKSxcbiAgICAgICAgeTogLTEuMCAqIE1hdGguY29zKGRlZ3JlZXMgLyAxODAuMCAqIE1hdGguUEkpLFxuICAgIH07XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGdyYWRpZW50IFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICovXG5mdW5jdGlvbiBjb252ZXJ0R3JhZGllbnRUb0RhcnQoZ3JhZGllbnQsIGNvbnRleHQpe1xuXG4gICAgaWYgKGdyYWRpZW50LnR5cGUgPT09ICdsaW5lYXInKXtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBncmFkaWVudC5hbmdsZSB8fCA5MDtcbiAgICAgICAgY29uc3QgZW5kID0gYW5nbGVUb1BvaW50KGFuZ2xlKTtcbiAgICAgICAgY29uc3QgYmVnaW4gPSB7XG4gICAgICAgICAgICB4IDogLWVuZC54LFxuICAgICAgICAgICAgeSA6IC1lbmQueSxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gYExpbmVhckdyYWRpZW50KFxuICAgIGNvbG9yczogWyR7Z3JhZGllbnQuY29sb3JzLm1hcChcbiAgICAgICAgICAgIGNvbG9ySGV4ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIGNvbnZlcnRDb2xvclRvRGFydChjb2xvckhleCwxLCB0cnVlLCBjb250ZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKX0gXSxcbiAgICBzdG9wczogW1xuICAgICAgICAke2dyYWRpZW50LnN0b3BzLmpvaW4oXCIsXFxuXFx0XFx0XFx0XFx0XCIpfVxuICAgIF0sXG4gICAgYmVnaW46IEFsaWdubWVudCgke2JlZ2luLngudG9GaXhlZCgyKX0sICR7YmVnaW4ueS50b0ZpeGVkKDIpfSksXG4gICAgZW5kOiBBbGlnbm1lbnQoJHtlbmQueC50b0ZpeGVkKDIpfSwgJHtlbmQueS50b0ZpeGVkKDIpfSksXG4gICAgLy8gYW5nbGU6ICR7Z3JhZGllbnQuYW5nbGV9LFxuICAgIC8vIHNjYWxlOiAke2dyYWRpZW50LnNjYWxlfSxcbiAgICApYDtcbiAgICB9XG5cbiAgICBlbHNlIGlmIChncmFkaWVudC50eXBlID09PSAncmFkaWFsJyl7XG4gICAgICAgIHJldHVybiBgUmFkaWFsR3JhZGllbnQoY29sb3JzOiBbJHtncmFkaWVudC5jb2xvcnMubWFwKFxuICAgICAgICAgICAgY29sb3JIZXggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAgY29udmVydENvbG9yVG9EYXJ0KGNvbG9ySGV4LDEsIHRydWUsIGNvbnRleHQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApfSBdLFxuICAgIHN0b3BzOiBbXG4gICAgICAgICR7Z3JhZGllbnQuc3RvcHMuam9pbihcIixcXG5cXHRcXHRcXHRcXHRcIil9XG4gICAgXVxuICAgIClgOyAgXG4gICAgfVxuXG4gICAgcmV0dXJuIGBgO1xuXG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHNoYWRvd3MgXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRTaGFkb3dzVG9EYXJ0KHNoYWRvd3MsIGNvbnRleHQpe1xuXG4gICAgcmV0dXJuIGBbJHtzaGFkb3dzLm1hcChcbiAgICAgICAgc2hhZG93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAgY29udmVydEJveFNoYWRvd1RvRGFydChzaGFkb3csIGNvbnRleHQpXG4gICAgICAgIH1cbiAgICAgICAgKX0gXSxcbmA7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IHNoYWRvdyBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqL1xuZnVuY3Rpb24gY29udmVydEJveFNoYWRvd1RvRGFydChzaGFkb3csIGNvbnRleHQpe1xuICAgIHJldHVybiBgQm94U2hhZG93KFxuICAgICAgICBjb2xvcjogJHtjb252ZXJ0Q29sb3JUb0RhcnQoc2hhZG93LmNvbG9yLDEsIGZhbHNlLCBjb250ZXh0KX0sXG4gICAgICAgIG9mZnNldDogT2Zmc2V0KCR7c2hhZG93Lm9mZnNldHh9LCR7c2hhZG93Lm9mZnNldHl9KSxcbiAgICAgICAgYmx1clJhZGl1czogJHtzaGFkb3cuYmx1clJhZGl1c30sXG4gICAgICAgIHNwcmVhZFJhZGl1czogJHtzaGFkb3cuc3ByZWFkUmFkaXVzfVxuICAgIClgO1xuICAgIFxufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gYm9yZGVyIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICovXG5mdW5jdGlvbiBjb252ZXJ0Qm9yZGVyVG9EYXJ0KGJvcmRlciwgY29udGV4dCl7XG4gICAgcmV0dXJuIGBCb3JkZXIuYWxsKFxuICAgICAgY29sb3I6ICR7Y29udmVydENvbG9yVG9EYXJ0KGJvcmRlci5jb2xvciwxLCBmYWxzZSwgY29udGV4dCl9LFxuICAgICAgd2lkdGg6ICR7Ym9yZGVyLndpZHRofVxuICAgIClgO1xuICAgIFxufVxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqL1xuZnVuY3Rpb24gY29udmVydENvbG9yc0xpc3RUb0RhcnQoY29udGV4dCl7XG4gICAgY29sb3JzID0gW107XG4gICAgY29udGV4dC5wcm9qZWN0LmNvbG9ycy5tYXAoXG4gICAgICAgIGNvbG9yTWFwID0+IHtcbiAgICAgICAgICAgIGNvbG9ycy5wdXNoKGBjb25zdCBDb2xvciAke2NvbG9yTWFwLm5hbWV9ID0gY29uc3QgJHtjb252ZXJ0Q29sb3JUb0RhcnQobmV3IENvbG9yKGNvbG9yTWFwLnRvSGV4KCkuciwgY29sb3JNYXAudG9IZXgoKS5nLGNvbG9yTWFwLnRvSGV4KCkuYiwgY29sb3JNYXAudG9IZXgoKS5hKSwgMSwgZmFsc2UpfTtgKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBjb2xvcnM7XG59XG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSBjb250ZXh0IFxuICovXG5mdW5jdGlvbiBjb252ZXJ0VGV4dFN0eWxlc0xpc3RUb0RhcnQoY29udGV4dCl7XG4gICAgdGV4dFN0eWxlcyA9IFtdO1xuICAgIGNvbnRleHQucHJvamVjdC50ZXh0U3R5bGVzLm1hcChcbiAgICAgICAgdGV4dFN0eWxlTWFwID0+IHtcbiAgICAgICAgICAgIHRleHRTdHlsZXMucHVzaChgY29uc3QgVGV4dFN0eWxlICR7dGV4dFN0eWxlTWFwLm5hbWUucmVwbGFjZSgvXFxzL2csICcnKX0gPSBjb25zdCAke2NvbnZlcnRUZXh0U3R5bGVUb0RhcnQoXG4gICAgICAgICAgICAgICAgbmV3IFRleHRTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlTWFwLmZvbnRGYW1pbHksXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDb2xvcih0ZXh0U3R5bGVNYXAuY29sb3IudG9IZXgoKS5yLCB0ZXh0U3R5bGVNYXAuY29sb3IudG9IZXgoKS5nLHRleHRTdHlsZU1hcC5jb2xvci50b0hleCgpLmIsIHRleHRTdHlsZU1hcC5jb2xvci50b0hleCgpLmEpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGVNYXAuZm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRleHRTdHlsZU1hcC5mb250V2VpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGVNYXAuZm9udFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGVNYXAubGV0dGVyU3BhY2luZyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFN0eWxlTWFwLmxpbmVIZWlnaHQgLFxuICAgICAgICAgICAgICAgICAgICBnZXRTaGFkb3dzKGNvbnRleHQsIFtdKVxuICAgICAgICAgICAgICAgICAgICApLCBjb250ZXh0XG4gICAgICAgICAgICAgICAgKX07YClcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdGV4dFN0eWxlcztcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gdGV4dFNwYW5zIFxuICovXG5mdW5jdGlvbiBjb252ZXJ0UmljaFRleHRUb0RhcnQodGV4dFNwYW5zLCB0ZXh0QWxpZ24sIGNvbnRleHQpe1xuICAgIFxuICAgIHRleHRBbGlnbiA9ICh0ZXh0QWxpZ24gPT0gbnVsbCkgPyBcIlwiIDpcbiAgICAgXCJcXG4gICAgdGV4dEFsaWduOiBUZXh0QWxpZ24uXCIgKyB0ZXh0QWxpZ24gKyBcIixcIjtcblxuICAgIHJldHVybiBgUmljaFRleHQoJHt0ZXh0QWxpZ259XG4gICAgdGV4dDogbmV3IFRleHRTcGFuKFxuICAgIGNoaWxkcmVuOiBbXG4gICAgJHt0ZXh0U3BhbnMubWFwKCB0ZXh0U3BhbiA9PlxuICAgICAgICB7cmV0dXJuIGNvbnZlcnRUZXh0U3BhblRvRGFydCh0ZXh0U3BhbiwgY29udGV4dCl9XG4gICAgICAgICl9LFxuICAgIF1cbiAgKVxuKWA7XG59XG5cblxuLypcblRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIHVzZWQgdG8gY3JlYXRlIGFsbFxudGhlIFdpZGdldCBPYmplY3RzIGZyb20gRmx1dHRlciwgdGhpcyBwYXJ0IHRyeSBvcmdhbml6ZVxuYmV0dGVyIHRoZSBmaW5hbCBjb2RlIFxuKi9cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gKiBAcGFyYW0geyp9IG9mZnNldHggXG4gKiBAcGFyYW0geyp9IG9mZnNldHkgXG4gKiBAcGFyYW0geyp9IGJsdXJSYWRpdXMgXG4gKiBAcGFyYW0geyp9IHNwcmVhZFJhZGl1cyBcbiAqL1xuZnVuY3Rpb24gQm94U2hhZG93KGNvbG9yLCBvZmZzZXR4LCBvZmZzZXR5LCBibHVyUmFkaXVzLCBzcHJlYWRSYWRpdXMpe1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm9mZnNldHggPSBvZmZzZXR4O1xuICAgIHRoaXMub2Zmc2V0eSA9IG9mZnNldHk7XG4gICAgdGhpcy5ibHVyUmFkaXVzID0gYmx1clJhZGl1cztcbiAgICB0aGlzLnNwcmVhZFJhZGl1cyA9IHNwcmVhZFJhZGl1cztcblxufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSB0eXBlIFxuICogQHBhcmFtIHsqfSBjb2xvcnMgXG4gKiBAcGFyYW0geyp9IHN0b3BzIFxuICogQHBhcmFtIHsqfSBhbmdsZSBcbiAqIEBwYXJhbSB7Kn0gc2NhbGUgXG4gKi9cbmZ1bmN0aW9uIEdyYWRpZW50KHR5cGUsIGNvbG9ycywgc3RvcHMsIGFuZ2xlLCBzY2FsZSl7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbiAgICB0aGlzLnN0b3BzID0gc3RvcHM7XG4gICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gKiBAcGFyYW0geyp9IHdpZHRoIFxuICovXG4vLyBCb3JkZXIgRmx1dHRlclxuZnVuY3Rpb24gQm9yZGVyKGNvbG9yLCB3aWR0aCl7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbn1cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBtb2RlbCBDb2xvciBmcm9tIERBUlQgb2JqZWN0XG5mdW5jdGlvbiBDb2xvcihyLGcsYixhKXtcbiAgICB0aGlzLnIgPSByO1xuICAgIHRoaXMuZyA9IGc7XG4gICAgdGhpcy5iID0gYjtcbiAgICB0aGlzLmEgPSBhO1xufVxuXG5mdW5jdGlvbiBlcXVhbHNDb2xvcihjb2xvcjEsIGNvbG9yMil7XG4gICAgaWYgKGNvbG9yMS5yID09IGNvbG9yMi5yICYmIFxuICAgICAgICBjb2xvcjEuZyA9PSBjb2xvcjIuZyAmJiBcbiAgICAgICAgY29sb3IxLmIgPT0gY29sb3IyLmIgJiYgXG4gICAgICAgIGNvbG9yMS5hID09IGNvbG9yMi5hIClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFxuICogQHBhcmFtIHsqfSB3aWR0aCBcbiAqIEBwYXJhbSB7Kn0gaGVpZ2h0IFxuICogQHBhcmFtIHsqfSBkZWNvcmF0aW9uIFxuICovXG4vLyBUaGlzIGlzIGEgZnVuY3Rpb24gdG8gbW9kZWwgU2hhcGUgYXMgREFSVCBDb250YWluZXIgRmx1dHRlclxuZnVuY3Rpb24gQ29udGFpbmVyKHdpZHRoLCBoZWlnaHQsIGRlY29yYXRpb24pIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5kZWNvcmF0aW9uID0gZGVjb3JhdGlvbjtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29sb3IgXG4gKiBAcGFyYW0geyp9IGJvcmRlciBcbiAqIEBwYXJhbSB7Kn0gYm9yZGVyUmFkaXVzIFxuICogQHBhcmFtIHsqfSBzaGFkb3dzIFxuICogQHBhcmFtIHsqfSBncmFkaWVudCBcbiAqIEBwYXJhbSB7Kn0gb3BhY2l0eSBcbiAqL1xuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIG1vZGVsIEJveERlY29yYXRpb24gaW4gRmx1dHRlclxuZnVuY3Rpb24gQm94RGVjb3JhdGlvbihjb2xvciwgYm9yZGVyLCBib3JkZXJSYWRpdXMsIHNoYWRvd3MsIGdyYWRpZW50LCBvcGFjaXR5KXtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5ib3JkZXIgPSBib3JkZXI7XG4gICAgdGhpcy5ib3JkZXJSYWRpdXMgPSBib3JkZXJSYWRpdXM7XG4gICAgdGhpcy5zaGFkb3dzID0gc2hhZG93cztcbiAgICB0aGlzLmdyYWRpZW50ID0gZ3JhZGllbnQ7XG4gICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gdGV4dCBcbiAqIEBwYXJhbSB7Kn0gdGV4dEFsaWduIFxuICogQHBhcmFtIHsqfSB0ZXh0U3R5bGUgXG4gKi9cbi8vIFRoaXMgaXMgYSBmdW50aW9uIHRvIG1vZGVsIFRleHQgaW4gRmx1dHRlclxuZnVuY3Rpb24gVGV4dCh0ZXh0LCB0ZXh0QWxpZ24sIHRleHRTdHlsZSl7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnRleHRBbGlnbiA9IHRleHRBbGlnbjtcbiAgICB0aGlzLnRleHRTdHlsZSA9IHRleHRTdHlsZTtcbn1cbi8qKlxuICogXG4gKiBAcGFyYW0geyp9IGZvbnRGYW1pbHkgXG4gKiBAcGFyYW0geyp9IGNvbG9yIFxuICogQHBhcmFtIHsqfSBmb250U2l6ZSBcbiAqIEBwYXJhbSB7Kn0gZm9udFdlaWdodCBcbiAqIEBwYXJhbSB7Kn0gZm9udFN0eWxlIFxuICogQHBhcmFtIHsqfSBsZXR0ZXJTcGFjaW5nIFxuICogQHBhcmFtIHsqfSBoZWlnaHQgXG4gKiBAcGFyYW0geyp9IHNoYWRvd3MgXG4gKi9cbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBtb2RlbCBUZXh0U3R5bGUgaW4gRmx1dHRlclxuZnVuY3Rpb24gVGV4dFN0eWxlKGZvbnRGYW1pbHksIGNvbG9yLCBmb250U2l6ZSwgZm9udFdlaWdodCwgZm9udFN0eWxlLCBsZXR0ZXJTcGFjaW5nLCBoZWlnaHQsIHNoYWRvd3Mpe1xuXG4gICAgdGhpcy5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgIHRoaXMuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gICAgdGhpcy5mb250U3R5bGUgPSBmb250U3R5bGU7XG4gICAgdGhpcy5sZXR0ZXJTcGFjaW5nID0gbGV0dGVyU3BhY2luZztcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLnNoYWRvd3MgPSBzaGFkb3dzO1xufVxuXG4vKlxuVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgdXNlZCBhcyBjb21tb24gZnVuY3Rpb25zXG4qL1xuLyoqXG4gKiBcbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBcbiAqIEBwYXJhbSB7Kn0gbGF5ZXIgXG4gKi9cbmZ1bmN0aW9uIGxheWVySGFzR3JhZGllbnQoY29udGV4dCwgbGF5ZXIpIHtcbiAgICByZXR1cm4gbGF5ZXIuZmlsbHMuc29tZShmID0+IGYudHlwZSA9PT0gXCJncmFkaWVudFwiKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGF5ZXIsXG4gICAgc2NyZWVuLFxuICAgIGNvbXBvbmVudCxcbiAgICBjb2xvcnMsXG4gICAgdGV4dFN0eWxlcyxcbiAgICBleHBvcnRDb2xvcnMsXG4gICAgZXhwb3J0VGV4dFN0eWxlcyxcbiAgICAvLyBzdHlsZWd1aWRlQ29sb3JzLFxuICAgIC8vIHN0eWxlZ3VpZGVUZXh0U3R5bGVzLFxuICAgIC8vIGV4cG9ydFN0eWxlZ3VpZGVDb2xvcnMsXG4gICAgLy8gZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMsXG4gICAgLy8gY29tbWVudFxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciAkcmVwZWF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1yZXBlYXQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgUmFuZ2VFcnJvciA9IGdsb2JhbC5SYW5nZUVycm9yO1xudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIHJlcGVhdCA9IHVuY3VycnlUaGlzKCRyZXBlYXQpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHVuJFRvRml4ZWQgPSB1bmN1cnJ5VGhpcygxLjAudG9GaXhlZCk7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoZGF0YSwgbiwgYykge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGMyID0gYztcbiAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgYzIgKz0gbiAqIGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG5cbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAoZGF0YSwgbikge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgYyA9IDA7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBjICs9IGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xuXG52YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIHMgPSAnJztcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpbmRleF0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdW4kVG9GaXhlZCgwLjAwMDA4LCAzKSAhPT0gJzAuMDAwJyB8fFxuICAgIHVuJFRvRml4ZWQoMC45LCAwKSAhPT0gJzEnIHx8XG4gICAgdW4kVG9GaXhlZCgxLjI1NSwgMikgIT09ICcxLjI1JyB8fFxuICAgIHVuJFRvRml4ZWQoMTAwMDAwMDAwMDAwMDAwMDEyOC4wLCAwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgdW4kVG9GaXhlZCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxuJCh7IHRhcmdldDogJ051bWJlcicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlck9ySW5maW5pdHkoZnJhY3Rpb25EaWdpdHMpO1xuICAgIHZhciBkYXRhID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHZhciBzaWduID0gJyc7XG4gICAgdmFyIHJlc3VsdCA9ICcwJztcbiAgICB2YXIgZSwgeiwgaiwgaztcblxuICAgIGlmIChmcmFjdERpZ2l0cyA8IDAgfHwgZnJhY3REaWdpdHMgPiAyMCkgdGhyb3cgUmFuZ2VFcnJvcignSW5jb3JyZWN0IGZyYWN0aW9uIGRpZ2l0cycpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKG51bWJlciAhPSBudW1iZXIpIHJldHVybiAnTmFOJztcbiAgICBpZiAobnVtYmVyIDw9IC0xZTIxIHx8IG51bWJlciA+PSAxZTIxKSByZXR1cm4gU3RyaW5nKG51bWJlcik7XG4gICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgIHNpZ24gPSAnLSc7XG4gICAgICBudW1iZXIgPSAtbnVtYmVyO1xuICAgIH1cbiAgICBpZiAobnVtYmVyID4gMWUtMjEpIHtcbiAgICAgIGUgPSBsb2cobnVtYmVyICogcG93KDIsIDY5LCAxKSkgLSA2OTtcbiAgICAgIHogPSBlIDwgMCA/IG51bWJlciAqIHBvdygyLCAtZSwgMSkgOiBudW1iZXIgLyBwb3coMiwgZSwgMSk7XG4gICAgICB6ICo9IDB4MTAwMDAwMDAwMDAwMDA7XG4gICAgICBlID0gNTIgLSBlO1xuICAgICAgaWYgKGUgPiAwKSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBqID0gZnJhY3REaWdpdHM7XG4gICAgICAgIHdoaWxlIChqID49IDcpIHtcbiAgICAgICAgICBtdWx0aXBseShkYXRhLCAxZTcsIDApO1xuICAgICAgICAgIGogLT0gNztcbiAgICAgICAgfVxuICAgICAgICBtdWx0aXBseShkYXRhLCBwb3coMTAsIGosIDEpLCAwKTtcbiAgICAgICAgaiA9IGUgLSAxO1xuICAgICAgICB3aGlsZSAoaiA+PSAyMykge1xuICAgICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IDIzKTtcbiAgICAgICAgICBqIC09IDIzO1xuICAgICAgICB9XG4gICAgICAgIGRpdmlkZShkYXRhLCAxIDw8IGopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxLCAxKTtcbiAgICAgICAgZGl2aWRlKGRhdGEsIDIpO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSA8PCAtZSwgMCk7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKSArIHJlcGVhdCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0KCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxuICAgICAgICA6IHN0cmluZ1NsaWNlKHJlc3VsdCwgMCwgayAtIGZyYWN0RGlnaXRzKSArICcuJyArIHN0cmluZ1NsaWNlKHJlc3VsdCwgayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWxsLmJpbmQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYmluZCA9IEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQ7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgY2FsbEJpbmQgPSBiaW5kICYmIGJpbmQuYmluZChjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kID8gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbiAmJiBjYWxsQmluZChjYWxsLCBmbik7XG59IDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmbiAmJiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsInZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsIi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgT2JqZWN0KGl0KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgcmV0dXJuICFTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGZ1bmMgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIHN5bWJvbEZvciA9IFN5bWJvbCAmJiBTeW1ib2xbJ2ZvciddO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEoTkFUSVZFX1NZTUJPTCB8fCB0eXBlb2YgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID09ICdzdHJpbmcnKSkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICdTeW1ib2wuJyArIG5hbWU7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2UgaWYgKFVTRV9TWU1CT0xfQVNfVUlEICYmIHN5bWJvbEZvcikge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gc3ltYm9sRm9yKGRlc2NyaXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICB9XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4xOS4yJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDIxIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IFR5cGVFcnJvcihTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zICYmIG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICB2YXIgc3RhdGU7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkge1xuICAgIGlmIChTdHJpbmcobmFtZSkuc2xpY2UoMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgICAgbmFtZSA9ICdbJyArIFN0cmluZyhuYW1lKS5yZXBsYWNlKC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICAgIH1cbiAgICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBuYW1lKTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5nZXQpO1xuICB2YXIgd21oYXMgPSB1bmN1cnJ5VGhpcyhzdG9yZS5oYXMpO1xuICB2YXIgd21zZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5zZXQpO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHdtaGFzKHN0b3JlLCBpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0KHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0KHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcyhzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsInZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIHNhZmVcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiAobnVtYmVyID4gMCA/IGZsb29yIDogY2VpbCkobnVtYmVyKTtcbn07XG4iLCJ2YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsInZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKDEuMC52YWx1ZU9mKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIFJhbmdlRXJyb3IgPSBnbG9iYWwuUmFuZ2VFcnJvcjtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiBTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5leGVjYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS5leGVjXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIHJlZ2V4cC9uby1lbXB0eS1jYXB0dXJpbmctZ3JvdXAsIHJlZ2V4cC9uby1lbXB0eS1ncm91cCwgcmVnZXhwL25vLWxhenktZW5kcyAtLSB0ZXN0aW5nICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWdleHAvbm8tdXNlbGVzcy1xdWFudGlmaWVyIC0tIHRlc3RpbmcgKi9cbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdldEludGVybmFsU3RhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKS5nZXQ7XG52YXIgVU5TVVBQT1JURURfRE9UX0FMTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtdW5zdXBwb3J0ZWQtZG90LWFsbCcpO1xudmFyIFVOU1VQUE9SVEVEX05DRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtdW5zdXBwb3J0ZWQtbmNnJyk7XG5cbnZhciBuYXRpdmVSZXBsYWNlID0gc2hhcmVkKCduYXRpdmUtc3RyaW5nLXJlcGxhY2UnLCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UpO1xudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgaW5kZXhPZiA9IHVuY3VycnlUaGlzKCcnLmluZGV4T2YpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgY2FsbChuYXRpdmVFeGVjLCByZTEsICdhJyk7XG4gIGNhbGwobmF0aXZlRXhlYywgcmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWSB8fCBVTlNVUFBPUlRFRF9ET1RfQUxMIHx8IFVOU1VQUE9SVEVEX05DRztcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHJpbmcpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUocmUpO1xuICAgIHZhciBzdHIgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgIHZhciByYXcgPSBzdGF0ZS5yYXc7XG4gICAgdmFyIHJlc3VsdCwgcmVDb3B5LCBsYXN0SW5kZXgsIG1hdGNoLCBpLCBvYmplY3QsIGdyb3VwO1xuXG4gICAgaWYgKHJhdykge1xuICAgICAgcmF3Lmxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgIHJlc3VsdCA9IGNhbGwocGF0Y2hlZEV4ZWMsIHJhdywgc3RyKTtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJhdy5sYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHZhciBncm91cHMgPSBzdGF0ZS5ncm91cHM7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IGNhbGwocmVnZXhwRmxhZ3MsIHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gcmVwbGFjZShmbGFncywgJ3knLCAnJyk7XG4gICAgICBpZiAoaW5kZXhPZihmbGFncywgJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gc3RyaW5nU2xpY2Uoc3RyLCByZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgY2hhckF0KHN0ciwgcmUubGFzdEluZGV4IC0gMSkgIT09ICdcXG4nKSkge1xuICAgICAgICBzb3VyY2UgPSAnKD86ICcgKyBzb3VyY2UgKyAnKSc7XG4gICAgICAgIHN0ckNvcHkgPSAnICcgKyBzdHJDb3B5O1xuICAgICAgICBjaGFyc0FkZGVkKys7XG4gICAgICB9XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgc3RyIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeKD86JyArIHNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICBtYXRjaCA9IGNhbGwobmF0aXZlRXhlYywgc3RpY2t5ID8gcmVDb3B5IDogcmUsIHN0ckNvcHkpO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoLmlucHV0ID0gc3RyaW5nU2xpY2UobWF0Y2guaW5wdXQsIGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IHN0cmluZ1NsaWNlKG1hdGNoWzBdLCBjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2guaW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICAgIHJlLmxhc3RJbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgcmUubGFzdEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIGNhbGwobmF0aXZlUmVwbGFjZSwgbWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChtYXRjaCAmJiBncm91cHMpIHtcbiAgICAgIG1hdGNoLmdyb3VwcyA9IG9iamVjdCA9IGNyZWF0ZShudWxsKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbaV07XG4gICAgICAgIG9iamVjdFtncm91cFswXV0gPSBtYXRjaFtncm91cFsxXV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG4vLyBVQyBCcm93c2VyIGJ1Z1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzEwMDhcbnZhciBNSVNTRURfU1RJQ0tZID0gVU5TVVBQT1JURURfWSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhJFJlZ0V4cCgnYScsICd5Jykuc3RpY2t5O1xufSk7XG5cbnZhciBCUk9LRU5fQ0FSRVQgPSBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9ICRSZWdFeHAoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCUk9LRU5fQ0FSRVQ6IEJST0tFTl9DQVJFVCxcbiAgTUlTU0VEX1NUSUNLWTogTUlTU0VEX1NUSUNLWSxcbiAgVU5TVVBQT1JURURfWTogVU5TVVBQT1JURURfWVxufTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJy4nLCAncycpIC0+IC8uL3MgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnLicsICdzJyk7XG4gIHJldHVybiAhKHJlLmRvdEFsbCAmJiByZS5leGVjKCdcXG4nKSAmJiByZS5mbGFncyA9PT0gJ3MnKTtcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBiYWJlbC1taW5pZnkgYW5kIENsb3N1cmUgQ29tcGlsZXIgdHJhbnNwaWxlcyBSZWdFeHAoJyg/PGE+YiknLCAnZycpIC0+IC8oPzxhPmIpL2cgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyICRSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gJFJlZ0V4cCgnKD88YT5iKScsICdnJyk7XG4gIHJldHVybiByZS5leGVjKCdiJykuZ3JvdXBzLmEgIT09ICdiJyB8fFxuICAgICdiJy5yZXBsYWNlKHJlLCAnJDxhPmMnKSAhPT0gJ2JjJztcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBnZXRTdWJzdGl0dXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbicpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFJFUExBQ0UgPSB3ZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcbnZhciBzdHJpbmdJbmRleE9mID0gdW5jdXJyeVRoaXMoJycuaW5kZXhPZik7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gSUUgPD0gMTEgcmVwbGFjZXMgJDAgd2l0aCB0aGUgd2hvbGUgbWF0Y2gsIGFzIGlmIGl0IHdhcyAkJlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjAyNDY2Ni9nZXR0aW5nLWllLXRvLXJlcGxhY2UtYS1yZWdleC13aXRoLXRoZS1saXRlcmFsLXN0cmluZy0wXG52YXIgUkVQTEFDRV9LRUVQU18kMCA9IChmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvcHJlZmVyLWVzY2FwZS1yZXBsYWNlbWVudC1kb2xsYXItY2hhciAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbi8vIFNhZmFyaSA8PSAxMy4wLjMoPykgc3Vic3RpdHV0ZXMgbnRoIGNhcHR1cmUgd2hlcmUgbj5tIHdpdGggYW4gZW1wdHkgc3RyaW5nXG52YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoLy4vW1JFUExBQ0VdKSB7XG4gICAgcmV0dXJuIC8uL1tSRVBMQUNFXSgnYScsICckMCcpID09PSAnJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tdXNlbGVzcy1kb2xsYXItcmVwbGFjZW1lbnRzIC0tIGZhbHNlIHBvc2l0aXZlXG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIGZ1bmN0aW9uIChfLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciByZXBsYWNlciA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChzZWFyY2hWYWx1ZSwgUkVQTEFDRSk7XG4gICAgICByZXR1cm4gcmVwbGFjZXJcbiAgICAgICAgPyBjYWxsKHJlcGxhY2VyLCBzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IGNhbGwobmF0aXZlUmVwbGFjZSwgdG9TdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PSAnc3RyaW5nJyAmJlxuICAgICAgICBzdHJpbmdJbmRleE9mKHJlcGxhY2VWYWx1ZSwgVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSAmJlxuICAgICAgICBzdHJpbmdJbmRleE9mKHJlcGxhY2VWYWx1ZSwgJyQ8JykgPT09IC0xXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByeCwgUywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSBpc0NhbGxhYmxlKHJlcGxhY2VWYWx1ZSk7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSB0b1N0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcHVzaChyZXN1bHRzLCByZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIHZhciBtYXRjaGVkID0gdG9TdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXJPckluZmluaXR5KHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIHB1c2goY2FwdHVyZXMsIG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IGNvbmNhdChbbWF0Y2hlZF0sIGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcHVzaChyZXBsYWNlckFyZ3MsIG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IHRvU3RyaW5nKGFwcGx5KHJlcGxhY2VWYWx1ZSwgdW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IHN0cmluZ1NsaWNlKFMsIG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgc3RyaW5nU2xpY2UoUywgbmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG59LCAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgfHwgIVJFUExBQ0VfS0VFUFNfJDAgfHwgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUpO1xuIiwidmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGFwcGx5ID0gRnVuY3Rpb25Qcm90b3R5cGUuYXBwbHk7XG52YXIgYmluZCA9IEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQ7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1yZWZsZWN0IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFJlZmxlY3QgPT0gJ29iamVjdCcgJiYgUmVmbGVjdC5hcHBseSB8fCAoYmluZCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYywgRk9SQ0VELCBTSEFNKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICBGT1JDRURcbiAgKSB7XG4gICAgdmFyIHVuY3VycmllZE5hdGl2ZVJlZ0V4cE1ldGhvZCA9IHVuY3VycnlUaGlzKC8uL1tTWU1CT0xdKTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIHZhciB1bmN1cnJpZWROYXRpdmVNZXRob2QgPSB1bmN1cnJ5VGhpcyhuYXRpdmVNZXRob2QpO1xuICAgICAgdmFyICRleGVjID0gcmVnZXhwLmV4ZWM7XG4gICAgICBpZiAoJGV4ZWMgPT09IHJlZ2V4cEV4ZWMgfHwgJGV4ZWMgPT09IFJlZ0V4cFByb3RvdHlwZS5leGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiB1bmN1cnJpZWROYXRpdmVSZWdFeHBNZXRob2QocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IHVuY3VycmllZE5hdGl2ZU1ldGhvZChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSk7XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIG1ldGhvZHNbMF0pO1xuICAgIHJlZGVmaW5lKFJlZ0V4cFByb3RvdHlwZSwgU1lNQk9MLCBtZXRob2RzWzFdKTtcbiAgfVxuXG4gIGlmIChTSEFNKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwUHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xuXG4vLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGNoYXJBdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBjaGFyQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIGNoYXJDb2RlQXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQ29kZUF0KTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXJPckluZmluaXR5KHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gY2hhckNvZGVBdChTLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IGNoYXJDb2RlQXQoUywgcG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkdcbiAgICAgICAgICA/IGNoYXJBdChTLCBwb3NpdGlvbilcbiAgICAgICAgICA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkdcbiAgICAgICAgICA/IHN0cmluZ1NsaWNlKFMsIHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpXG4gICAgICAgICAgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkezEsMn18PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZHsxLDJ9KS9nO1xuXG4vLyBgR2V0U3Vic3RpdHV0aW9uYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2UocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoYXJBdChjaCwgMCkpIHtcbiAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHJpbmdTbGljZShzdHIsIDAsIHBvc2l0aW9uKTtcbiAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHJpbmdTbGljZShzdHIsIHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW3N0cmluZ1NsaWNlKGNoLCAxLCAtMSldO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoYXJBdChjaCwgMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaGFyQXQoY2gsIDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAoaXNDYWxsYWJsZShleGVjKSkge1xuICAgIHZhciByZXN1bHQgPSBjYWxsKGV4ZWMsIFIsIFMpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIGFuT2JqZWN0KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoY2xhc3NvZihSKSA9PT0gJ1JlZ0V4cCcpIHJldHVybiBjYWxsKHJlZ2V4cEV4ZWMsIFIsIFMpO1xuICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9