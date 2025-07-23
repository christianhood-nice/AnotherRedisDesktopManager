<template>
  <JsonEditor ref='editor' :content='newContent' :readOnly='false'></JsonEditor>
</template>

<script type="text/javascript">
import JsonEditor from '@/components/JsonEditor';
const JSONbig = require('@qii404/json-bigint')({ useNativeBigInt: false });

const { compressSync, uncompressSync } = require('lz4-napi');

export default {
  components: { JsonEditor },
  props: ['content'],
  computed: {
    newContent() {
      const { formatStr } = this;

      if (typeof formatStr === 'string') {
        if (this.$util.isJson(formatStr)) {
          return JSONbig.parse(formatStr);
        }

        return formatStr;
      }

      return 'Lz4 Parse Failed!';
    },
    formatStr() {
      const uncompressedBuffer = uncompressSync(this.content);
      return uncompressedBuffer.toString();
    },
  },
  methods: {
    getContent() {
      const content = this.$refs.editor.getRawContent(true);
      return compressSync(content);
    },
    copyContent() {
      return this.formatStr;
    },
  },
};
</script>
