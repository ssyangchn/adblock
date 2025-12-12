let body = $response.body;

if (body) {
    try {
        let json = JSON.parse(body);
        if (json.data && Array.isArray(json.data)) {
            let before = json.data.length;
            json.data = json.data.filter(i => i.type !== "ad");
            let after = json.data.length;
            let removed = before - after;
            if (removed > 0) {
                $notification.post("知乎去广告","",`已过滤 ${removed} 条广告`);
            }
        }
        body = JSON.stringify(json);
    } catch (e) {}
}

$done({ body });
