export const colors = {
    primary: '#6782FF',
    secondary:'#92A5FF',
    primaryBackground: '#ECEFF7',
    secondaryBackground:'#FFFFFF',
    text:'#8F8D98',
    dangerColor:'#E53838',
};

export const globalStyles = {
    container: {
        flex: 1,
    },
    containerPage: {
        backgroundColor: colors.backgroundPrimary,
        padding: 16,
        minHeight: '100%',
    },
    textNormal: {
        color: colors.text,
        fontSize: 17,
        flexWrap: 'wrap',
        flex: 1,
    },
    textBold: {
        color: colors.text,
        fontSize: 18,
        fontWeight: '700',
    },
    textInput: {
        backgroundColor: colors.primaryBackground,
        color: colors.text,
        fontSize: 18,
        marginVertical: 6,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    textExplain: {
        color: colors.text,
        fontSize: 14,
    },
    form: {
        backgroundColor: colors.secondaryBackground,
        display: 'flex',
        marginVertical: 30,
        padding: 30,
        borderRadius: 30,
    },
    formHalfLeft: {
        width: '48%',
        marginRight: '4%',
        marginVertical: 4,
    },
    formHalfRight: {
        width: '48%',
        marginVertical: 4,
    },
    formHalfLeftSwitch: {
        width: '48%',
        marginRight: '4%',
        marginVertical: 4,
        justifyContent: 'flex-start',
    },
    formFull: {
        width: '100%',
        marginVertical: 4,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    hidden: {
        display: 'none',
    },
    text: {
      color: colors.text,
    }
};