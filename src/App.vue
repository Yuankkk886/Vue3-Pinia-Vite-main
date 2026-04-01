<script lang="ts" setup>
/* eslint-disable perfectionist/sort-imports */
import zhCn from "element-plus/es/locale/lang/zh-cn" // Element Plus 中文包
import { useGreyAndColorWeakness } from "@@/composables/useGreyAndColorWeakness"
import { useTheme } from "@@/composables/useTheme"
import { useYyx } from "@/common/composables/useYyx"

const { initTheme } = useTheme()

const { initGreyAndColorWeakness } = useGreyAndColorWeakness()

const { initStarNotification, initStoreNotification, initMobileNotification } = useYyx()

// 初始化主题
initTheme()

// 初始化灰色模式和色弱模式
initGreyAndColorWeakness()

// #region 初始化通知
initStarNotification()

initStoreNotification()

initMobileNotification()
// #endregion
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
