export async function getWelcomeMessage(userId: number): Promise<string> {
    // 這裡可以放置實際的 API 調用
    return "Welcome back to your IELTS Reading Practice!";
  }
  
  export async function getProgressDigest(userId: number): Promise<string> {
    // 這裡可以放置實際的 API 調用
    return "You've completed 5 practice sessions this week. Great progress!";
  }
  
  export async function getRecommendedReadingMaterials(userId: number): Promise<Array<{ title: string; url: string }>> {
    // 這裡可以放置實際的 API 調用
    return [
      { title: "The Impact of Climate Change", url: "#" },
      { title: "Advancements in Artificial Intelligence", url: "#" },
      { title: "The Future of Sustainable Energy", url: "#" },
    ];
  }