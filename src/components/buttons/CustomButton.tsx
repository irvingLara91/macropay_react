import React from 'react';
import {Button, useTheme} from '@mui/material';
import {makeStyles} from '@mui/styles';

type CustomButtonProps = {
    fontWeight?: string;
    type?:   'submit' | 'button' | 'reset';
    id?: string;
    text: string;
    disabled?: boolean;
    onClick: () => void;
    onScroll?: (e: any) => void;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    disableElevation?: boolean;
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties | undefined;
    variant?: 'text' | 'contained' | 'outlined';
    color?:
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning';
};

const useStyles = makeStyles({
    root: {
        borderRadius: 10,
        textTransform: 'none',
    },
});

export const CustomButton: React.FC<CustomButtonProps> = ({
                                                              id,
                                                              text,
                                                              type,
                                                              style,
                                                              onClick,
                                                              onScroll,
                                                              endIcon = null,
                                                              size = 'medium',
                                                              disabled = false,
                                                              variant = 'text',
                                                              color = 'inherit',
                                                              startIcon = null,
                                                              disableElevation = true,
                                                              fontWeight = 'bold'
                                                          }) => {
    const classes = useStyles();
    const {palette} = useTheme();

    return (
        <Button
            id={''}
            type={type}
            size={size}
            style={{...style, fontWeight: fontWeight, borderRadius: 8}}
            color={color}
            onClick={onClick}
            onScroll={onScroll}
            variant={variant}
            endIcon={endIcon}
            disabled={disabled}
            startIcon={startIcon}
            className={classes.root}
            disableElevation={disableElevation}
        >
            {text}
        </Button>
    );
};
