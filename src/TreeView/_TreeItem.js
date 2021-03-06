import PropTypes from 'prop-types';
import shortid from '../utils/shortId';
import React, { Component } from 'react';

class TreeItem extends Component {
    constructor(props) {
        super(props);

        const {
            rowId,
            onExpandClick
        } = this.props;

        // Generate unique id for row to manage expand/collapse state in parent if prop isn't given
        this.rowId = rowId || shortid.generate();

        // Initialize row in parent TreeView state
        onExpandClick(this.rowId);
    }

    render() {
        const {
            children,
            expandData,
            level,
            onExpandClick,
            isExpanded: isExpandedProp,
            rowId,
            ...rest
        } = this.props;
        const isExpanded = isExpandedProp || !!expandData[this.rowId];

        // Render child TreeBranch with correct props
        const childBranch = React.Children.toArray(children)
            .filter(child => child.type && child.type.displayName === 'TreeView.Branch')
            .map(child => {
                return React.cloneElement(child, {
                    expandData,
                    onExpandClick,
                    isExpanded,
                    // Increment child branch level
                    level: level + 1
                });
            });

        // Render child TreeRow with correct props
        const childRow = React.Children.toArray(children)
            .filter(child => child.type && child.type.displayName === 'TreeView.Row')
            .map(child => {
                return React.cloneElement(child, {
                    isExpanded,
                    onExpandClick: () => onExpandClick(this.rowId),
                    isParent: !!childBranch[0],
                    rowId: this.rowId
                });
            });

        return (
            <li
                {...rest}
                aria-expanded={isExpanded}
                className='fd-tree__item'
                id={this.rowId}
                role='treeitem'>
                {childRow}
                {childBranch}
            </li>
        );
    }
}

TreeItem.displayName = 'TreeView.Item';

TreeItem.propTypes = {
    /** Node(s) to render within the component.
     * Expecting `TreeRow` and `TreeBranch` components as children */
    children: PropTypes.node,
    /** Internal use only */
    expandData: PropTypes.object,
    /** Set to *true* for expanded tree item. This variable is handled internally,
     * but can be overridden by the consumer through this prop */
    isExpanded: PropTypes.bool,
    /** Internal use only */
    level: PropTypes.number,
    /** ID used to track the expanded/collapsed state of the row. This variable is handled internally,
     * but can be overridden by the consumer through this prop */
    rowId: PropTypes.string,
    /** Internal use only */
    onExpandClick: PropTypes.func
};

TreeItem.defaultProps = {
    expandData: {},
    level: 0,
    onExpandClick: () => {}
};

export default TreeItem;
