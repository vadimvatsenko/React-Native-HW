import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    textAlign: 'center',
    
  },
  formWrap: {
    position: "relative",
    backgroundColor: '#FFFFFF',
    height: "auto",
    marginTop: 'auto',
    paddingTop: 92,
    paddingBottom: 78,
    // marginBottom: -100,
    paddingRight: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  title: {
    marginBottom: 33,
    fontWeight: 500,
    fontSize: 30,
    textAlign: 'center',
    color: "#212121"
  },
  inputWrapper: {
    marginTop: -16,
  },
  
  
  avatarWrap: {
    position: "absolute",
    top: -60,
    right: "50%",
    transform: [{ translateX: 45 }],
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6"
  },

  loginLink: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  showBtn: {
    position: "absolute",
    right: 0,
    bottom: 25,
  }
});

