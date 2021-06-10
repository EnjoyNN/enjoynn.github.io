document.addEventListener("DOMContentLoaded", function() {
    var e = [].slice.call(document.querySelectorAll("img.lazy"))
      , t = [].slice.call(document.querySelectorAll(".lazy-background"))
      , a = [].slice.call(document.querySelectorAll("[data-bg]"));
    if ("IntersectionObserver"in window) {
        let o = new IntersectionObserver(function(e, t) {
            e.forEach(function(e) {
                if (e.isIntersecting) {
                    let t = e.target;
                    t.src = t.dataset.src,
                    t.srcset = t.dataset.srcset,
                    t.classList.remove("lazy"),
                    o.unobserve(t)
                }
            })
        }
        );
        e.forEach(function(e) {
            o.observe(e)
        });
        let r = new IntersectionObserver(function(e, t) {
            e.forEach(function(e) {
                e.isIntersecting && (e.target.classList.add("visible"),
                r.unobserve(e.target))
            })
        }
        );
        t.forEach(function(e) {
            r.observe(e)
        });
        let s = new IntersectionObserver(function(e, t) {
            e.forEach(function(e) {
                if (e.isIntersecting) {
                    let t = e.target;
                    t.style.backgroundImage = "url(" + t.dataset.bg + ")",
                    s.unobserve(t)
                }
            })
        }
        );
        a.forEach(function(e) {
            s.observe(e)
        })
    } else
        e.forEach(function(e) {
            e.src = e.dataset.src,
            e.srcset = e.dataset.srcset
        }),
        t.forEach(function(e) {
            e.classList.add("visible")
        }),
        a.forEach(function(e) {
            e.style.backgroundImage = "url(" + e.dataset.bg + ")"
        })
});
