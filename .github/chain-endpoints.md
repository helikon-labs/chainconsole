---
title: Endpoint availability changes {{ date | date('ddd, MMM D YYYY, h:mm:ss a') }}
labels: ['ci']
---

Availability of some configured endpoints have changed.

Check the nightly cron output (or via `yarn ci:chainEndpoints` locally) and disable or enable the endpoints (with `isAvailable`) until the issue is resolved. The output as found from the test includes:
