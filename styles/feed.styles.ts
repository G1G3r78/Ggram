import { COLORS } from "@/constants/theme";
import { Dimensions, Platform, StyleSheet } from "react-native";

const {width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    commentsList: {
        flexDirection: "column",
        padding: "5%",
        gap: "10%"
    },
    commentContainer: {
        flex: 1,
        flexDirection: "row",
        color: COLORS.background
    },
    header: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.surface,
        //backgroundColor: "#ffffff00"
    },
    headerTtile: {
        fontSize: 24,
        fontFamily: "JetBrainsMono-Medium",
        color: COLORS.primary,
        width: "95%"
    },
    storiesContainer: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.surface
    },
    storyWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        width: 72
    },
    storyRing: {
        width: 65,
        height: 65,
        borderRadius: 34,
        padding: 2,
        backgroundColor: COLORS.primary,
        marginBottom: 4,
        justifyContent: "center",
        alignItems: 'center'

    },
    noStory: {
        backgroundColor: COLORS.grey,
        width: 65,
        height: 65,
        borderRadius: 34,
        padding: 2,
        marginBottom: 4,
        justifyContent: "center",
        alignItems: 'center'
    },
    storyAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.background
    },
    storyUsername: {
        fontSize: 11,
        color: COLORS.white,
        textAlign: "center"
    },
    post: {
        marginBottom: 16
    },
    postHeader: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    },
    postHeaderLeft: {
        flexDirection: 'row',
        alignItems: "center"
    },
    postAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8
    },
    postUsername: {
        fontSize: 14,
        fontWeight: "600",
        color: COLORS.white
    },
    postImage: {
        width: width,
        height: width
    },
    postActions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    postActionsLeft: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 16,
    },
    postInfo: {
        paddingHorizontal: 12
    },
    likesText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.white,
        marginBottom: 6
    },
    captionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 6
    },
    captionUsername: {
        fontWeight: "600",
        fontSize: 14,
        color: COLORS.white,
        marginRight: 6
    },
    captionText: {
        fontSize: 14,
        color: COLORS.white,
        flex: 1
    },
    centered: {
        justifyContent: "center",
        alignItems: "center"
    },
    postButtonDisabled: {
        opacity: 0.5
    },
    postButton: {
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 14
    },
    input: {
        flex: 1,
        color: COLORS.white,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 12,
        backgroundColor: COLORS.surface,
        borderRadius: 20,
        fontSize: 14
    },
    commentInput: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderWidth: 0.5,
        borderTopColor: COLORS.surface,
        backgroundColor: COLORS.background
    },
    commentTime: {
        color: COLORS.white,
        fontSize: 14,
        lineHeight: 20
    },
    commentUsername: {
        color: COLORS.white,
        fontWeight: "500",
        marginBottom: 4
    },
    commentContent: {
        flex: 1
    },
    commentAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 12
    },
    modalTitle: {
        color: COLORS.white,
        fontSize: 16
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 56,
        borderBottomWidth: 0.5,
        borderBottomColor: COLORS.white
    },
    modalContainer: {
        backgroundColor: COLORS.background,
        marginBottom: Platform.OS === "ios" ? 44 : 0,
        flex: 1,
        marginTop: Platform.OS === "ios" ? 44 : 0
    },
    timeAgo: {
        fontSize: 12,
        color: COLORS.grey,
        marginBottom: 8
    },
    commentText : {
        fontSize: 14,
        color: COLORS.white,
        marginBottom: 4
    },
    /*iconPos: {
        left: 200
    }*/
});