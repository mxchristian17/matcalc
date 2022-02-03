export const contextConfig = (ctx, pixelRatio, width, height) => {
    ctx.save();
    ctx.scale(pixelRatio, pixelRatio);
    ctx.clearRect(0, 0, width, height);
    ctx.restore();
}

export const circle = (ctx, centerX, centerY, diameter, color = "black") => {

    const maxSize = 140
    const radius = maxSize / 2

    const startX = (centerX - 0.70710678 * radius)
    const startY = (centerY + 0.70710678 * radius)
    const endX = (centerX + 0.70710678 * radius)
    const endY = (centerY - 0.70710678 * radius)

    const arrowDiameterPoints = {
        startX : startX,
        startY : startY,
        endX : endX,
        endY : endY,
        text : typeof(diameter) !== "undefined" ? Math.round(diameter*1000)/1000 : 0
    }
    
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    return [arrowDiameterPoints]
}

export const rectangle = (ctx, centerX, centerY, sideA, sideB, color = "black") => {

    const maxSize = 80
    let A = parseFloat(sideA)
    let B = parseFloat(sideB)
    if(A >= B) {
        B = B / (A / maxSize)
        A = maxSize
    }
    if(B >= A) {
        A = A / (B / maxSize)
        B = maxSize
    }
    
    const width = parseInt(A) 
    const height = parseInt(B)
    const x = parseInt(centerX - width / 2)
    const y = parseInt(centerY - height / 2)

    const arrowSideAPoints = {
        startX : x,
        startY : y,
        endX : x + width,
        endY : y,
        text : typeof(sideA) !== "undefined" ? Math.round(sideA*1000)/1000 : 0
    }

    const arrowSideBPoints = {
        startX : x + width,
        startY : y,
        endX : x + width,
        endY : y + height,
        text : typeof(sideB) !== "undefined" ? Math.round(sideB*1000)/1000 : 0
    }
    
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.rect(x, y, A, B);
    ctx.stroke();

    return [arrowSideAPoints, arrowSideBPoints]
}

export const ngon = (ctx, centerX, centerY, sides, sideA, color = "black") => {

    const apotema = 30 //(sideA/(2*Math.tan(Math.PI/sides)))
    const shapeRotationAngle = 3 * Math.PI / 2
    const startX = centerX +  2 * apotema * Math.cos(shapeRotationAngle)
    const startY = centerY +  2 * apotema * Math.sin(shapeRotationAngle)
    const pointX = (i) => centerX + 2 * apotema * Math.cos(i * 2 * Math.PI / sides + shapeRotationAngle)
    const pointY = (i) => centerY + 2 * apotema * Math.sin(i * 2 * Math.PI / sides + shapeRotationAngle)

    ctx.beginPath();

    ctx.moveTo (startX, startY);          

    for (var i = 1; i <= sides;i += 1) {
    ctx.lineTo (pointX(i), pointY(i));
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();

    const arrowSideAPoints = {
        startX : startX,
        startY : startY,
        endX : pointX(i),
        endY : pointY(i),
        text : typeof(sideA) !== "undefined" ? Math.round(sideA*1000)/1000 : 0
    }

    return [arrowSideAPoints]
}

export const startArrow = (ctx, arrowSize, startX, startY, endX, endY, color = "#00AAAA") => {

    const angle = Math.atan((endY-startY)/(endX-startX))

    const startArrow = {
        x1 : startX,
        y1 : startY,
        x2 : startX + 4 * arrowSize * Math.cos(angle) + 0.5 * arrowSize * Math.sin(angle),
        y2 : startY + 4 * arrowSize * Math.sin(angle) - 0.5 * arrowSize * Math.cos(angle),
        x3 : startX + 4 * arrowSize * Math.cos(angle) - 0.5 * arrowSize * Math.sin(angle),
        y3 : startY + 4 * arrowSize * Math.sin(angle) + 0.5 * arrowSize * Math.cos(angle)
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startArrow.x1, startArrow.y1);
    ctx.lineTo(startArrow.x2, startArrow.y2);
    ctx.lineTo(startArrow.x3, startArrow.y3);
    ctx.closePath();
    ctx.fill();
}

export const endArrow = (ctx, arrowSize, startX, startY, endX, endY, color = "#00AAAA") => {

    const angle = Math.atan((endY-startY)/(endX-startX))

    const endArrow = {
        x1 : endX,
        y1 : endY,
        x2 : endX - 4 * arrowSize * Math.cos(angle) - 0.5 * arrowSize * Math.sin(angle),
        y2 : endY - 4 * arrowSize * Math.sin(angle) + 0.5 * arrowSize * Math.cos(angle),
        x3 : endX - 4 * arrowSize * Math.cos(angle) + 0.5 * arrowSize * Math.sin(angle),
        y3 : endY - 4 * arrowSize * Math.sin(angle) - 0.5 * arrowSize * Math.cos(angle)
    }

    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(endArrow.x1, endArrow.y1);
    ctx.lineTo(endArrow.x2, endArrow.y2);
    ctx.lineTo(endArrow.x3, endArrow.y3);
    ctx.closePath();
    ctx.fill();
    return 
}

export const doubleArrow = (ctx, width, height, arrowSize, startX, startY, endX, endY, text = "", offset = 0, color = "#00AAAA") => {

    const angle = Math.atan((endY-startY)/(endX-startX))
    const distance = Math.sqrt((endX-startX)**2+(endY-startY)**2)
    const offsetX = - offset * Math.cos(angle + Math.PI / 2)
    const offsetY = - offset * Math.sin(angle + Math.PI / 2)
    const arrowOutside = 8 * arrowSize > distance ? true : false
    
    if(arrowOutside) {
        startX = [endX, endX = startX][0]
        startY = [endY, endY = startY][0]
    }

    const startArrow = {
        x1 : startX + offsetX,
        y1 : startY + offsetY,
        x2 : startX + 4 * arrowSize * Math.cos(angle) + 0.5 * arrowSize * Math.sin(angle) + offsetX,
        y2 : startY + 4 * arrowSize * Math.sin(angle) - 0.5 * arrowSize * Math.cos(angle) + offsetY,
        x3 : startX + 4 * arrowSize * Math.cos(angle) - 0.5 * arrowSize * Math.sin(angle) + offsetX,
        y3 : startY + 4 * arrowSize * Math.sin(angle) + 0.5 * arrowSize * Math.cos(angle) + offsetY
    }

    const endArrow = {
        x1 : endX + offsetX,
        y1 : endY + offsetY,
        x2 : endX - 4 * arrowSize * Math.cos(angle) - 0.5 * arrowSize * Math.sin(angle) + offsetX,
        y2 : endY - 4 * arrowSize * Math.sin(angle) + 0.5 * arrowSize * Math.cos(angle) + offsetY,
        x3 : endX - 4 * arrowSize * Math.cos(angle) + 0.5 * arrowSize * Math.sin(angle) + offsetX,
        y3 : endY - 4 * arrowSize * Math.sin(angle) - 0.5 * arrowSize * Math.cos(angle) + offsetY
    }

    const startSideLine = {
        x1 : startX,
        y1 : startY,
        x2 : startX + offsetX + 0.5 * arrowSize * Math.sin(angle),
        y2 : startY + offsetY - 0.5 * arrowSize * Math.cos(angle)
    }

    const endSideLine = {
        x1 : endX,
        y1 : endY,
        x2 : endX + offsetX + 0.5 * arrowSize * Math.sin(angle),
        y2 : endY + offsetY - 0.5 * arrowSize * Math.cos(angle)
    }

    const textPoint = {
        x : startX + offsetX + (distance / 2) * Math.cos(angle) + 8 * Math.sin(angle),
        y : startY + offsetY + (distance / 2) * Math.sin(angle) - 8 * Math.cos(angle)
    }

    //primaryLine
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.moveTo(startX + offsetX, startY + offsetY);
    ctx.lineTo(endX + offsetX, endY + offsetY);
    ctx.stroke();

    //startArrow
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(startArrow.x1, startArrow.y1);
    ctx.lineTo(startArrow.x2, startArrow.y2);
    ctx.lineTo(startArrow.x3, startArrow.y3);
    ctx.closePath();
    ctx.fill();

    //endArrow
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(endArrow.x1, endArrow.y1);
    ctx.lineTo(endArrow.x2, endArrow.y2);
    ctx.lineTo(endArrow.x3, endArrow.y3);
    ctx.closePath();
    ctx.fill();

    //startSideLine
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.moveTo(startSideLine.x1, startSideLine.y1);
    ctx.lineTo(startSideLine.x2, startSideLine.y2);
    ctx.stroke();

    //endSideLine
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.moveTo(endSideLine.x1, endSideLine.y1);
    ctx.lineTo(endSideLine.x2, endSideLine.y2);
    ctx.stroke();

    //text
    ctx.font = "16px Arial";
    ctx.textAlign = angle > 0 ? "left" : "right";
    const textWidth = angle > 0 ? width-25-textPoint.x : textPoint.x-25;
    ctx.fillText(text, textPoint.x, textPoint.y, textWidth);
    return
}