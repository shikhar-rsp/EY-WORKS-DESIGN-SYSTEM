import 'package:flutter/material.dart';

class TopBarDefault extends StatelessWidget {
  const TopBarDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      child: Container(
        height: 62,
        color: const Color(0xFFFFFFFF), // --background
        padding: const EdgeInsets.symmetric(horizontal: 16), // --space-200
        child: Row(
          children: [
            // Left: Logo + Workspace + Search
            Expanded(
              child: Row(
                children: [
                  // Logo
                  RichText(
                    text: const TextSpan(
                      children: [
                        TextSpan(
                          text: 'ey',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                            color: Color(0xFFF8785E), // --primary
                          ),
                        ),
                        TextSpan(
                          text: 'works',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 18,
                            fontWeight: FontWeight.w700,
                            color: Color(0xFF2E2B2B), // --foreground
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 12), // --space-150

                  // Workspace dropdown
                  Container(
                    height: 40,
                    decoration: BoxDecoration(
                      color: const Color(0xFFFFFFFF), // --background
                      border: Border.all(color: const Color(0xFFEBE9E8)), // --border
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text(
                          'Thatcham Nurseries',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 14,
                            height: 20 / 14,
                            color: Color(0xFF2E2B2B), // --foreground
                          ),
                        ),
                        const SizedBox(width: 4),
                        const Icon(
                          Icons.keyboard_arrow_down,
                          size: 20,
                          color: Color(0xFF2E2B2B),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 16),

                  // Search
                  Expanded(
                    child: Container(
                      height: 38,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFFFFF),
                        border: Border.all(color: const Color(0xFFEBE9E8)),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              'Search anything',
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(
                                fontFamily: 'Lexend',
                                fontSize: 14,
                                height: 20 / 14,
                                color: Color(0xFFC7C6C6), // --placeholder
                              ),
                            ),
                          ),
                          const Icon(
                            Icons.search,
                            size: 20,
                            color: Color(0xFF7A7272), // --muted-foreground
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),

            const SizedBox(width: 16),

            // Right: Settings + Notification + Avatar
            Row(
              children: [
                // Settings
                IconButton(
                  onPressed: () {},
                  icon: const Icon(
                    Icons.settings_outlined,
                    size: 24,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),

                // Notification with badge
                Stack(
                  clipBehavior: Clip.none,
                  children: [
                    IconButton(
                      onPressed: () {},
                      icon: const Icon(
                        Icons.notifications_outlined,
                        size: 24,
                        color: Color(0xFF7A7272),
                      ),
                    ),
                    Positioned(
                      top: 4,
                      right: 4,
                      child: Container(
                        width: 16,
                        height: 16,
                        decoration: const BoxDecoration(
                          color: Color(0xFFFF0000), // --destructive-bold
                          shape: BoxShape.circle,
                        ),
                        alignment: Alignment.center,
                        child: const Text(
                          '9+',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 9,
                            color: Color(0xFFFFFFFF), // --primary-foreground
                          ),
                        ),
                      ),
                    ),
                  ],
                ),

                const SizedBox(width: 4),

                // Avatar
                GestureDetector(
                  onTap: () {},
                  child: Container(
                    width: 40,
                    height: 40,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFFEBE9E8)),
                      image: const DecorationImage(
                        image: NetworkImage('https://i.pravatar.cc/40?img=5'),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
