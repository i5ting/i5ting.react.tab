var i5ting    = require('./src/index');
var Tab       = i5ting.Tab;
var TabItem   = i5ting.TabItem;

React.render(
  <Tab>
    <TabItem title="tab说明" current>
      <p>tab说明</p>
    </TabItem>
    <TabItem title="'特性111'">
      特性
    </TabItem>
    <TabItem title="开源协议">
      开源协议
    </TabItem>
    <TabItem title="源码">
      源码
    </TabItem>
    <TabItem title="张婷作品">
      <p>张婷作品</p>
    </TabItem>
  </Tab>
  ,
  document.getElementById('wrap1')
);
