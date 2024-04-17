<template>
    <TopNavbar />
    <div class="ss-body ss-api-body">
        <SideNavbar :showHeadings="true" />
        <slot></slot>
    </div>
    <SimpleFooter />
</template>