module.exports = {
  pageShots: {
    pages: [
      { path: "/lost", name: "landing" },
      { path: "/", name: "test add" },
      { path: "/case1", name: "test delete" },
      { path: "/test-error", name: "test error" },
    ],
    baseUrl: "http://172.17.0.1:3000",
  },
  lostPixelProjectId: "clozjim4j7952g80eaq8aygrp",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
