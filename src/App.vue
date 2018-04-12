<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
              </MenuItem>
              <MenuItem name="2">
              <Icon type="ios-navigate"></Icon>
              资产管理
              </MenuItem>
              <MenuItem name="3">
              <Icon type="ios-keypad"></Icon>
              报表管理
              </MenuItem>
              <MenuItem name="4">
              <Icon type="ios-analytics"></Icon>
              风险管理
              </MenuItem>
              <MenuItem name="5">
              <Icon type="ios-paper"></Icon>
              系统管理
              </MenuItem>
            </div>
            <div class="layout-user">
              <Icon type="ios-bell"></Icon>
              <Icon type="person"></Icon>&nbsp;
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  Item 2
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <router-view/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

<style scoped lang="scss">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  margin: 0 auto;
  margin-left: 290px;
}
.layout-footer-center {
  text-align: center;
}
.layout-user {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: #fff;
  .ivu-icon {
    color: #fff;
    margin-left: 20px;
  }
}
</style>
