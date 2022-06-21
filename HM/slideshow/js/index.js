window.addEventListener('load', function() {
    //1获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //2鼠标经过显示左右按钮 离开隐藏
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer = setInterval(function() {
                //手动调用点击事件
                arrow_r.click();
            }, 2000)
        })
        //3动态生成小圆圈 几张图就几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        //创建小li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 自定义属性来做
        li.setAttribute('index', i);
        //把小li插入到ol
        ol.appendChild(li);
        //4点击变色 排他思想
        li.addEventListener('click', function() {
            //干掉所有人
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            //留下我自己
            this.className = 'current';
            //5点击小圆圈 移动图片 移动的是ul
            //ul的移动距离 是 小圆圈的索引号*图片的宽度 负值

            var index = this.getAttribute('index');
            //点击小圆圈 把li的索引给num;
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    ///6克隆第一张图 放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7点击右侧按钮 图片滚动一张
    var num = 0;
    //控制小圆圈的播放
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; //关闭节流阀
            //如果走到了最后一张 此时 ul要快速复原left为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            //8点击右侧按钮 小圆圈跟着一起变化
            circle++;
            //小圆圈走到末尾 复原
            if (circle == ol.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            ol.children[circle].className = 'current';

        }
    })
    arrow_l.addEventListener('click', function() {
            if (flag) {
                flag = false;
                //如果走到了最后一张 此时 ul要快速复原left为0
                if (num == 0) {
                    ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';
                    num = ul.children.length - 1;
                }
                num--;
                animate(ul, -num * focusWidth, function() {
                    flag = true; //打开节流阀
                });
                //8点击右侧按钮 小圆圈跟着一起变化
                circle--;
                //小圆圈走到末尾 复原
                if (circle < 0) {
                    circle = ol.children.length - 1;
                }
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = '';
                }
                ol.children[circle].className = 'current';
            }
        })
        //10自动播放 定时器
    var timer = setInterval(function() {
        //手动调用点击事件
        arrow_r.click();
    }, 2000)
})