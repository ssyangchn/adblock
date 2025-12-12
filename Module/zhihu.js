let body = $response.body;

if (body) {
    $notification.post("开始去广告");
    try {
        let json = JSON.parse(body);
        if (json.data && Array.isArray(json.data)) {
            let before = json.data.length;
            json.data = json.data.filter(i => i.type !== "ad");
            let after = json.data.length;
            let removed = before - after;
            $notification.post(`已过滤 ${removed} 条广告`);
        }
        body = JSON.stringify(json);
    } catch (e) {}
}

$done({ body });
