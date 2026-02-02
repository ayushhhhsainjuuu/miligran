import React from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Story = {
  id: string;
  name: string;
  img: string;
  isMine?: boolean;
};

const stories: Story[] = [
  {
    id: "1",
    name: "Your story",
    img: "https://picsum.photos/seed/me/200",
    isMine: true,
  },
  { id: "2", name: "person 1", img: "https://picsum.photos/seed/a/200" },
  { id: "3", name: "person 2", img: "https://picsum.photos/seed/b/200" },
  { id: "4", name: "unknown", img: "https://picsum.photos/seed/c/200" },
  { id: "5", name: "randomfriend", img: "https://picsum.photos/seed/d/200" },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Whole screen */}
      <View style={styles.screen}>
        {/* Scrollable content */}
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          {/* Top bar */}
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.topIconBtn}>
              <Text style={styles.topIcon}>＋</Text>
            </TouchableOpacity>

            <Text style={styles.logoText}>MiliGram</Text>

            <TouchableOpacity style={styles.topIconBtn}>
              <Text style={styles.topIcon}>♡</Text>
            </TouchableOpacity>
          </View>

          {/* Stories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesRow}
          >
            {stories.map((s) => (
              <View key={s.id} style={styles.storyWrap}>
                <View style={styles.storyRing}>
                  <View style={styles.storyInnerRing}>
                    <Image source={{ uri: s.img }} style={styles.storyImg} />
                  </View>

                  {s.isMine && (
                    <View style={styles.storyPlus}>
                      <Text style={styles.storyPlusText}>＋</Text>
                    </View>
                  )}
                </View>

                <Text style={styles.storyName} numberOfLines={1}>
                  {s.name}
                </Text>
              </View>
            ))}
          </ScrollView>

          {/* Feed item header */}
          <View style={styles.feedHeader}>
            <View style={styles.feedLeft}>
              <Image
                source={{ uri: "https://picsum.photos/seed/f1/200" }}
                style={styles.feedAvatar}
              />
              <Text style={styles.feedName}>f1</Text>
              <Text style={styles.verified}>✔︎</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.moreDots}>⋯</Text>
            </TouchableOpacity>
          </View>

          {/* Post image */}
          <View style={styles.postWrap}>
            <Image
              source={{ uri: "https://picsum.photos/seed/post/1200/1400" }}
              style={styles.postImg}
            />
          </View>

          {/* optional spacing like IG */}
          <View style={{ height: 12 }} />
        </ScrollView>

        {/* Bottom nav */}
        <View style={styles.bottomBar}>
          <Text style={styles.bottomIcon}>⌂</Text>
          <Text style={styles.bottomIcon}>▣</Text>
          <Text style={styles.bottomIcon}>＋</Text>
          <Text style={styles.bottomIcon}>⌕</Text>
          <View style={styles.profileDot} />
        </View>

        {/* Alert button (required) */}
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
          activeOpacity={0.8}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0b0f14",
  },
  screen: {
    flex: 1,
    backgroundColor: "#0b0f14",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 10,
  },

  /* Top bar */
  topBar: {
    height: 56,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topIconBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  topIcon: {
    color: "white",
    fontSize: 26,
  },
  logoText: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  /* Stories */
  storiesRow: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 14,
  },
  storyWrap: {
    width: 86,
    alignItems: "center",
  },
  storyRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#ff2db3", // close to IG ring vibe
  },
  storyInnerRing: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
    backgroundColor: "#0b0f14",
    padding: 2,
  },
  storyImg: {
    width: "100%",
    height: "100%",
    borderRadius: 37,
  },
  storyName: {
    marginTop: 6,
    color: "#cfd6df",
    fontSize: 12,
  },
  storyPlus: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#0b0f14",
  },
  storyPlusText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0b0f14",
    marginTop: -1,
  },

  /* Feed header */
  feedHeader: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feedLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  feedAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  feedName: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  verified: {
    color: "#5ab3ff",
    fontSize: 14,
    marginTop: 1,
  },
  moreDots: {
    color: "white",
    fontSize: 26,
    marginTop: -6,
  },

  /* Post */
  postWrap: {
    width: "100%",
    aspectRatio: 3 / 4, // tall like your screenshot
    backgroundColor: "#111827",
  },
  postImg: {
    width: "100%",
    height: "100%",
  },

  /* Bottom nav */
  bottomBar: {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: "#1f2a37",
    backgroundColor: "#0b0f14",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomIcon: {
    color: "white",
    fontSize: 24,
  },
  profileDot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#e5e7eb",
  },

  /* Alert button (required) */
  alertBtn: {
    height: 48,
    marginHorizontal: 14,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  alertBtnText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0b0f14",
  },
});
