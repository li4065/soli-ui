import React, { forwardRef, useState } from 'react';
import { StyledTypography, getComponentMapping } from './typography.styles';
import type { TypographyProps, TextVariant, EllipsisConfig, CopyConfig } from './typography.types';

// Icons
const CopyIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true" style={{ color: '#52c41a' }}>
    <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
  </svg>
);

// 基础 Typography 组件
const InternalTypography = forwardRef<HTMLElement, TypographyProps>(({
  component,
  variant = 'p',
  children,
  copyable,
  ...props
}, ref) => {
  const Component = component || getComponentMapping(variant);
  const [copied, setCopied] = useState(false);

  const copyConfig: CopyConfig | null = typeof copyable === 'object' ? copyable : (copyable ? {} : null);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const textToCopy = copyConfig?.text || (typeof children === 'string' ? children : String(children));
    
    if (textToCopy) {
      navigator.clipboard.writeText(String(textToCopy)).then(() => {
        setCopied(true);
        copyConfig?.onCopy?.();
        
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      });
    }
  };
  
  return (
    <StyledTypography as={Component} variant={variant} ref={ref} copyable={copyable} {...props}>
      {children}
      {copyConfig && (
        <button 
          onClick={handleCopy}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            padding: 0, 
            marginLeft: 8, 
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            color: '#1890ff',
            fontSize: 'inherit',
            verticalAlign: 'middle',
            outline: 'none'
          }}
          aria-label="Copy"
          title={typeof copyConfig.tooltips === 'object' ? (copied ? copyConfig.tooltips[1] : copyConfig.tooltips[0]) as string : undefined}
        >
          {copied ? <CheckIcon /> : (copyConfig.icon || <CopyIcon />)}
        </button>
      )}
    </StyledTypography>
  );
});

InternalTypography.displayName = 'Typography';

// Title 组件
export interface TitleProps extends Omit<TypographyProps, 'variant'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = forwardRef<HTMLElement, TitleProps>(({ level = 1, ...props }, ref) => {
  return <InternalTypography variant={`h${level}` as TextVariant} ref={ref} {...props} />;
});

Title.displayName = 'Typography.Title';

// Text 组件
export interface TextProps extends Omit<TypographyProps, 'variant'> {
  variant?: 'span' | 'strong' | 'em' | 'code' | 'mark' | 'underline' | 'delete';
}

const Text = forwardRef<HTMLElement, TextProps>(({ variant = 'span', ...props }, ref) => {
  return <InternalTypography variant={variant} ref={ref} {...props} />;
});

Text.displayName = 'Typography.Text';

// Paragraph 组件
const Paragraph = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
  const { ellipsis, children, ...restProps } = props;
  const [expanded, setExpanded] = useState(false);

  const ellipsisConfig: EllipsisConfig | null = typeof ellipsis === 'object' ? ellipsis : (ellipsis ? {} : null);
  
  const handleExpand = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setExpanded(true);
    ellipsisConfig?.onExpand?.(e);
  };

  const passedEllipsis = expanded ? undefined : ellipsis;

  return (
    <div style={{ position: 'relative' }}>
      <InternalTypography variant="p" ref={ref} ellipsis={passedEllipsis} {...restProps}>
        {children}
      </InternalTypography>
      {ellipsisConfig?.expandable && !expanded && (
        <a 
          onClick={handleExpand}
          style={{ 
            display: 'inline-block', 
            marginTop: 4, 
            color: '#1890ff', 
            cursor: 'pointer',
            fontSize: '0.9em'
          }}
        >
          {ellipsisConfig.symbol || 'Expand'}
        </a>
      )}
      {ellipsisConfig?.suffix && (
        <span style={{ marginLeft: 4 }}>{ellipsisConfig.suffix}</span>
      )}
    </div>
  );
});

Paragraph.displayName = 'Typography.Paragraph';

// Link 组件
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, Omit<TypographyProps, 'variant' | 'href' | 'target' | 'rel'> {
  href?: string;
  target?: string;
  rel?: string;
}

const Link = forwardRef<HTMLElement, LinkProps>((props, ref) => {
  return <InternalTypography variant="a" ref={ref} {...props} />;
});

Link.displayName = 'Typography.Link';

// 组合组件
type TypographyComponent = typeof InternalTypography & {
  Title: typeof Title;
  Text: typeof Text;
  Paragraph: typeof Paragraph;
  Link: typeof Link;
};

const Typography = InternalTypography as TypographyComponent;
Typography.Title = Title;
Typography.Text = Text;
Typography.Paragraph = Paragraph;
Typography.Link = Link;

export { Typography };
