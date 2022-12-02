<template>
    <el-dropdown>
        <el-button type="primary" size="small">
            更多
            <el-icon class="el-icon--right"><ArrowDown/></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>