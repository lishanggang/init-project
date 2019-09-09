const ButtonGroupProps = {
    prefixCls: {
        type: 'String',
        default: 'lmt-btn-group'
    },
    size: {
        validator (val) {
            return ['small', 'large', 'default'].includes(val)
        }
    }
}
export default {
    name: 'ButtonGroup',
    componentName: 'ButtonGroup',
    props: {

    },
    render () {

    }
}