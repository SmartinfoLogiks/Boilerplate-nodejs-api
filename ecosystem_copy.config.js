module.exports = {
  apps : [{
    name: 'APIHub',
    script: 'index.js',
    instances : '1',
    watch: "api",
    exec_mode : "cluster",
    env: {
        "NODE_ENV": "production"
    }
  }]
};
