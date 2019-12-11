const model = {
    id: 'test-id000001'
};

// 简单示例
const simple = {};

const field = {
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'event',
        name: 'delete'
    },
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// route
const route = {};

const routeField = {
    type: 'Button',
    subtype: 'primary',
    text: '详情',
    action: {
        type: 'route',
        route: {
            path: '/home'
        }
    },
};

route.data = {
    field: routeField,
    model
};

route.code = `
<script>
const field = ${JSON.stringify(routeField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;


// url
const url = {};

const urlField = {
    type: 'Button',
    subtype: 'primary',
    text: '详情',
    action: {
        type: 'url',
        url: 'http://www.baidu.com'
    },
};

url.data = {
    field: urlField,
    model
};

url.code = `
<script>
const field = ${JSON.stringify(urlField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// ajax示例
let ajax = {};

const ajaxField = {
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete'
    },
};


ajax.data = {
    field: ajaxField,
    model
};

ajax.code = `
<script>
const field = ${JSON.stringify(ajaxField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// confirm
const confirm = {};
const confirmField = {
    confirmPoptip: {
        title: '确定删除?',
        placement: 'right'
    },
    type: 'Button',
    text: '删除',
    subtype: 'error',
    action: {
        type: 'ajax',
        api: '/curdDelete'
    }
};

confirm.data = {
    field: confirmField,
    model
};

confirm.code = `
<script>
const field = ${JSON.stringify(confirmField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
<script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

export default {
    simple,
    route,
    url,
    ajax,
    confirm
};
