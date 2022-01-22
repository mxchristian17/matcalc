export const circle = (ctx, centerX, centerY, radius, color = "black") => {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
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

export const doubleArrow = (ctx, arrowSize, startX, startY, endX, endY, color = "#00AAAA") => {

    const angle = Math.atan((endY-startY)/(endX-startX))

    const startArrow = {
        x1 : startX,
        y1 : startY,
        x2 : startX + 4 * arrowSize * Math.cos(angle) + 0.5 * arrowSize * Math.sin(angle),
        y2 : startY + 4 * arrowSize * Math.sin(angle) - 0.5 * arrowSize * Math.cos(angle),
        x3 : startX + 4 * arrowSize * Math.cos(angle) - 0.5 * arrowSize * Math.sin(angle),
        y3 : startY + 4 * arrowSize * Math.sin(angle) + 0.5 * arrowSize * Math.cos(angle)
    }

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
    ctx.moveTo(startArrow.x1, startArrow.y1);
    ctx.lineTo(startArrow.x2, startArrow.y2);
    ctx.lineTo(startArrow.x3, startArrow.y3);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(endArrow.x1, endArrow.y1);
    ctx.lineTo(endArrow.x2, endArrow.y2);
    ctx.lineTo(endArrow.x3, endArrow.y3);
    ctx.closePath();
    ctx.fill();
    return 
}