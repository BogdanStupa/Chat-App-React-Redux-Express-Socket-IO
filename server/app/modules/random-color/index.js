export default () => {
    const colors = [
        "#9370DB",
        "#6B8E23",
        "#4169E1",
        "#2E8B57",
        "#9ACD32",
        "#BC8F8F"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}