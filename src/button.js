// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as decoration from './box_decoration';
import * as util from './util';
import * as options from './options';

export function widget(context, version, component ) {
    const button = parse(context, version, component);
    return toDart(context, button);
}

export class ButtonStyle {
 
    constructor(textStyle ,backgroundColor, foregroundColor, overlayColor, shadowColor, elevation, padding ) {
        this.textStyle = textStyle;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.overlayColor = overlayColor;
        this.shadowColor = shadowColor;
        this.elevation = elevation;
        this.padding = padding;
    }
}

function parse(context, version, component) {
    var container = new Button(layer.rect.x, layer.rect.y, layer.rect.width, layer.rect.height);
    container.decoration = decoration.parse(context, layer);
    return container;
}

function toDart(context, button) {
    var widthElement = "";
    if (!options.skipWidthInContainer(context)) {
        widthElement = `\n\twidth: ${container.width},`;
    }

    var heightElement = "";
    if (!options.skipHeightInContainer(context)) {
        heightElement = `\n\theight: ${container.height},`;
    }

    var marginElement = "";
    if (!options.skipMarginLeftAndRight(context)) {
        if (container.x != 0) {
            marginElement = `\n\tmargin: EdgeInsets.only(\n\t\tleft: ${container.x},\n\t\tright: ${container.x},\n\t),`;
        }
    }

    var decorationElement = "";
    const decorationDart = decoration.toDart(context, container.decoration, 2);
    if (decorationDart != null) {
        decorationElement = `\n\tdecoration: ${decorationDart},`;
    }

    return `Button(${widthElement}${heightElement}${marginElement}${decorationElement}\n),`;
}
