let body = $response.body;

if (body) {
    try {
        let json = JSON.parse(body);
        if (json.data && Array.isArray(json.data)) {
            json.data = json.data.filter(i => i.type !== "ad");
        }
        body = JSON.stringify(json);
    } catch (e) {}
}

$done({ body });
