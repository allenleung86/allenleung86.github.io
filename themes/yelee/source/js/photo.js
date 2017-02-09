/**
 * Created by 890170 on 2017-02-09.
 */
define([], function () {
    return {
        page: 1,
        offset: 20,
        init: function () {
            var that = this;
            $.getJSON("/photos/photoData.json", function (data) {
                that.render(that.page, data);

                that.scroll(data);
            });
        },

        render: function (page, data) {
            var begin = (page - 1) * this.offset;
            var end = page * this.offset;
            if (begin >= data.length) return;
            var html, li = "";
            for (var i = begin; i < end && i < data.length; i++) {
                li += '<li>\
                            <div class="img-box">\
                                <a class="img-bg" rel="example_group" href="http://okxw7jg6g.bkt.clouddn.com/' + data[i] + '"></a>\
                                <img src="http://okxw7jg6g.bkt.clouddn.com/' + data[i] + '" />\
                            </div>\
                        </li>';
            }

            $(".img-box-ul").append(li);
            $(".img-box-ul").lazyload();
            $("a[rel=example_group]").fancybox();
        },

        scroll: function (data) {
            var that = this;
            $(window).scroll(function () {
                var windowPageYOffset = window.pageYOffset;
                var windowPageYOffsetAddHeight = windowPageYOffset + window.innerHeight;
                var sensitivity = 0;

                var offsetTop = $(".instagram").offset().top + $(".instagram").height();

                if (offsetTop >= windowPageYOffset && offsetTop < windowPageYOffsetAddHeight + sensitivity) {
                    that.render(++that.page, data);
                }
            })
        }
    }
})