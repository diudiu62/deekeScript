var e = {
    getDate() {
        var e = new Date(), t = e.getMonth() + 1, e = e.getDate();
        return (10 <= t ? t : "0" + t) + "." + (10 <= e ? e : "0" + e);
    },
    getData(e) {
        return e = e || this.getDate(), {
            s_viewVideo: Storage.getInteger("s_viewVideo" + e) || 0,
            s_viewTargetVideo: Storage.getInteger("s_viewTargetVideo" + e) || 0,
            s_zan: Storage.getInteger("s_zan" + e) || 0,
            s_comment: Storage.getInteger("s_comment" + e) || 0,
            s_zanComment: Storage.getInteger("s_zanComment" + e) || 0,
            s_privateMsg: Storage.getInteger("s_privateMsg" + e) || 0,
            s_focus: Storage.getInteger("s_focus" + e) || 0,
            s_viewUser: Storage.getInteger("s_viewUser" + e) || 0
        };
    },
    getWeekDate() {
        var t = [], a = new Date();
        for (let e = 1; e <= 7; e++) {
            var s = a.getTime() - 864e5 * e, s = new Date(s), g = ("0" + (s.getMonth() + 1)).slice(-2), s = ("0" + s.getDate()).slice(-2);
            t.push(g + "." + s);
        }
        return t;
    },
    getWeekData() {
        var e, t = this.getWeekDate(), a = [];
        for (e in t) a.push([ t[e], this.getData(t[e]) ]);
        var s, g = [], i = [ "s_viewVideo", "s_viewTargetVideo", "s_zan", "s_comment", "s_zanComment", "s_privateMsg", "s_focus", "s_viewUser" ];
        for (s in i) {
            g[i[s]] = [];
            for (let e = a.length - 1; 0 <= e; e--) g[i[s]].push([ a[e][0], a[e][1][i[s]] ]);
        }
        return g;
    },
    dataList() {
        var e = this.getData(this.getDate()), t = this.getWeekData();
        return [ {
            title: "今日累计视频",
            weight: 12,
            checked: !0,
            value: e.s_viewVideo,
            data: t.s_viewVideo
        }, {
            title: "今日目标视频",
            weight: 12,
            value: e.s_viewTargetVideo,
            data: t.s_viewTargetVideo
        }, {
            title: "今日点赞",
            weight: 8,
            value: e.s_zan,
            data: t.s_zan
        }, {
            title: "今日评论",
            count: 1,
            weight: 8,
            value: e.s_comment,
            data: t.s_comment
        }, {
            title: "今日赞评论",
            weight: 8,
            value: e.s_zanComment,
            data: t.s_zanComment
        }, {
            title: "今日私信",
            weight: 8,
            value: e.s_privateMsg,
            data: t.s_privateMsg
        }, {
            title: "今日关注",
            count: 1,
            weight: 8,
            value: e.s_focus,
            data: t.s_focus
        }, {
            title: "今日访问",
            weight: 8,
            value: e.s_viewUser,
            data: t.s_viewUser
        } ];
    }
};