/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Dialog from '../Dialog';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';
import React, { useState } from 'react';

export default {
    title: 'Component API/Dialog',
    component: Dialog
};

// TO DO: reenable storyshots for examples using hooks in storybook@6
// https://github.com/storybookjs/storybook/releases/tag/v6.0.0-alpha.43

export const primary = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};

primary.story = {
    parameters: {
        storyshots: { disable: true }
    }
};

export const header = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                header='Test header'
                onClose={() => setShowDialog(false)}
                show={showDialog}
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};

header.story = {
    parameters: {
        storyshots: { disable: true }
    }
};

export const subheader = () => {
    let [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <Button onClick={() => setShowDialog(true)}>
                Show Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                subheader='Test subheader'
                title='Product Added'>
                <p><b>The new product have been added to your catalog.</b></p>
                <p>Automatic Product ID: <b>PD-3465334</b></p>
                <p>Expiration date: <b>13/03/2018</b></p>
            </Dialog>
        </>
    );
};

subheader.story = {
    parameters: {
        storyshots: { disable: true }
    }
};

export const sizes = () => {
    let [showDialog, setShowDialog] = useState(false);
    let [showDialogMd, setShowDialogMd] = useState(false);
    let [showDialogLg, setShowDialogLg] = useState(false);
    let [showDialogXl, setShowDialogXl] = useState(false);
    return (
        <div className='fr-container'>
            <Button onClick={() => setShowDialog(true)}>
                Show Small Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialog(false)}
                show={showDialog}
                size='s'
                title='Small Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>



            <Button onClick={() => setShowDialogMd(true)}>
                Show Medium Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogMd(false)}
                show={showDialogMd}
                size='m'
                title='Medium Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>


            <Button onClick={() => setShowDialogLg(true)}>
                Show Large Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogLg(false)}
                show={showDialogLg}
                size='l'
                title='Large Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>



            <Button onClick={() => setShowDialogXl(true)}>
                Show XL Dialog
            </Button>
            <Dialog
                actions={[
                    (<Button option='transparent'>
                        No
                    </Button>),
                    (<Button>Yes</Button>)
                ]}
                onClose={() => setShowDialogXl(false)}
                show={showDialogXl}
                size='xl'
                title='XL Dialog'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </Dialog>
        </div>
    );
};

sizes.story = {
    name: 'Sizes',
    parameters: {
        docs: {
            storyDescription: 'By default dialog body has no horizontal paddings. Add a size to modify the padding'
        },
        storyshots: { disable: true }
    }
};



export const dev = () => (
    <Dialog
        actions={[
            (<Button option='transparent'>No</Button>),
            (<Button>Yes</Button>)
        ]}
        header={text('header', 'Test header')}
        show={boolean('show', true)}
        size={select('size', {
            none: null,
            s: 's',
            m: 'm',
            l: 'l',
            xl: 'xl'
        })}
        subheader={text('subheader', 'Test Subheader')}
        title={text('title', 'Test title')}>
        <p><b>The new product have been added to your catalog.</b></p>
        <p>Automatic Product ID: <b>PD-3465334</b></p>
        <p>Expiration date: <b>13/03/2018</b></p>
    </Dialog>
);


dev.story = {
    parameters: {
        docs: { disable: true },
        storyshots: { disable: true }
    }
};


export const small = () => (
    <Dialog
        actions={[
            (<Button option='transparent'>No</Button>),
            (<Button>Yes</Button>)
        ]}
        show
        size='s'
        title='Product Added'>
        <p><b>The new product have been added to your catalog.</b></p>
        <p>Automatic Product ID: <b>PD-3465334</b></p>
        <p>Expiration date: <b>13/03/2018</b></p>
    </Dialog>
);

small.story = {
    parameters: {
        docs: { disable: true },
        storyshots: { disable: true }
    }
};


export const medium = () => (
    <Dialog
        actions={[
            (<Button option='transparent'>No</Button>),
            (<Button>Yes</Button>)
        ]}
        show
        size='m'
        title='Product Added'>
        <p><b>The new product have been added to your catalog.</b></p>
        <p>Automatic Product ID: <b>PD-3465334</b></p>
        <p>Expiration date: <b>13/03/2018</b></p>
    </Dialog>
);

medium.story = {
    parameters: {
        docs: { disable: true },
        storyshots: { disable: true }
    }
};


export const large = () => (
    <Dialog
        actions={[
            (<Button option='transparent'>No</Button>),
            (<Button>Yes</Button>)
        ]}
        show
        size='l'
        title='Product Added'>
        <p><b>The new product have been added to your catalog.</b></p>
        <p>Automatic Product ID: <b>PD-3465334</b></p>
        <p>Expiration date: <b>13/03/2018</b></p>
    </Dialog>
);

large.story = {
    parameters: {
        docs: { disable: true },
        storyshots: { disable: true }
    }
};


export const xl = () => (
    <Dialog
        actions={[
            (<Button option='transparent'>No</Button>),
            (<Button>Yes</Button>)
        ]}
        show
        size='xl'
        title='Product Added'>
        <p><b>The new product have been added to your catalog.</b></p>
        <p>Automatic Product ID: <b>PD-3465334</b></p>
        <p>Expiration date: <b>13/03/2018</b></p>
    </Dialog>
);

xl.story = {
    parameters: {
        docs: { disable: true },
        storyshots: { disable: true }
    }
};
