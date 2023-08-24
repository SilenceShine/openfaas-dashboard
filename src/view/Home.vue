<template>
    <el-container>
        <el-header>header</el-header>
        <el-container class="panel">
            <el-aside class="mq">
                <el-menu default-active="rocketmq" class="background" :collapse="true" @select="handleSelect" @click="handleSelect">
                    <el-menu-item index="rocketmq">
                        <el-icon class="rocketmq" style=""></el-icon>
                    </el-menu-item>
                    <el-menu-item index="kafka">
                        <el-icon class="kafka"></el-icon>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="panel">Main</el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style scoped>
.el-header {
    height: 55px;
}

.panel {
    height: calc(100vh - 55px);
}

.el-menu-item {
    height: 50px;
    width: 50px;
    margin-top: 15px;
    margin-left: 15px;
    border-radius: 20px;
    background-color: rgb(205, 99, 214);
}

.el-icon.rocketmq {
    background-image: url('@/assets/icon/rocketmq.svg');
}

.el-icon.kafka {
    background-image: url('@/assets/icon/kafka.svg');
}

</style>
