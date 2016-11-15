AFRAME.registerComponent('scale-on-click', {
    schema: {
        to: {default: '2 2 2'}
    },
    init: function () {
        var data = this.data;
        this.el.addEventListener('click', function () {
            this.setAttribute('scale', data.to);
        });
    }
});