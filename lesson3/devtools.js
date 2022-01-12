// 声明panel.html
chrome.devtools.panels.create("CRX Panel",
                              "assets/logo.png",
                              "devtool/panel.html",
                              function(panel) { 
                                console.log('创建成功了')
                              });

// 声明sidebar.html
chrome.devtools.panels.elements.createSidebarPane("Crx Sidebar",
  function(sidebar) {
    sidebar.setPage("devtool/sidebar.html");
    sidebar.setHeight("8ex");
  }
);