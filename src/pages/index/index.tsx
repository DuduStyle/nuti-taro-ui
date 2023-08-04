import React from 'react'
import { View, CustomWrapper } from '@tarojs/components'
import { Button, NoticeBar } from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      {/* <NoticeBar leftIcon={<></>} content='我是测测恶策' scrollable speed={30}  /> */}
      <CustomWrapper>
        <NoticeBar leftIcon={<></>} content='我是测测恶策' scrollable speed={30} />
      </CustomWrapper>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
    </View>
  )
}

export default Index
