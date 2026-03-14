import React from 'react';
import { ListItemContainer, ListItemAvatar, ListItemContent, ListItemTitle, ListItemDescription, ListItemExtra, ListItemActions} from './list.styles'

export interface ListItemProps {
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  actions?: React.ReactNode[];
  bordered?: boolean;
  hoverable?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  onClick,
  style,
  className,
  avatar,
  title,
  description,
  extra,
  actions = [],
  bordered = true,
  hoverable = false
}) => {
  const renderContent = () => {
    if (children) {
      return children;
    }
    
    return (
      <>
        {avatar && <ListItemAvatar>{avatar}</ListItemAvatar>}
        
        <ListItemContent>
          {title && <ListItemTitle>{title}</ListItemTitle>}
          {description && <ListItemDescription>{description}</ListItemDescription>}
          {actions.length > 0 && (
            <ListItemActions>
              {actions.map((action, index) => (
                <span key={index}>{action}</span>
              ))}
            </ListItemActions>
          )}
        </ListItemContent>
        
        {extra && <ListItemExtra>{extra}</ListItemExtra>}
      </>
    );
  };
  
  return (
    <ListItemContainer 
      className={`solid-list-item ${className || ''}`}
      onClick={onClick}
      bordered={bordered}
      hoverable={hoverable}
      style={style}
    >
      {renderContent()}
    </ListItemContainer>
  );
};