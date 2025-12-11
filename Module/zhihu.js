let body = $response.body;

if (body) {
    try {
        $notification.post("开始过滤广告")
        let json = JSON.parse(body);

        if (json.data && Array.isArray(json.data)) {
            let before = json.data.length;

            json.data = json.data.filter(i => i.type !== "ad");

            let after = json.data.length;
            let removed = before - after;

            // ★ 日志输出
            $notification.post(`已过滤 ${removed} 条广告`);
        }

        body = JSON.stringify(json);
    } catch (e) {
        console.log("知乎脚本: JSON 解析失败 - " + e);
    }
}

$done({ body });
