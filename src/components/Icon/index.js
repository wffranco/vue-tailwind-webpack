import icons from './icons';

const xmlns = 'http://www.w3.org/2000/svg';
const viewBox = '0 0 16 16';

const icon = (type, props) => icons[type] ? icons[type](props) : null;

export default function Icon({type, height = null, width = null, style = {}, ...props}) {
  if ('class' in props) delete props.class;
  if (style instanceof Array) {
    style.push({width, height});
  } else if (style instanceof Object) {
    style = {...style, width, height};
  } else {
    style = [style, {width, height}];
  }

  // kebab-case => camelCase
  if (/-[a-z]/.test(type)) type = type.replace(/-([a-z])/g, (m, r) => r.toUpperCase());

  return icon(type, {
    ...props,
    style,
    xmlns,
    viewBox,
  });
}
