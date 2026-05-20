import 'package:flutter/material.dart';

class SidebarDefault extends StatelessWidget {
  const SidebarDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 322,
      height: 500,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        boxShadow: const [
          BoxShadow(
            color: Color(0x1A000000),
            blurRadius: 16,
            offset: Offset(-2, 0),
          ),
        ],
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      clipBehavior: Clip.hardEdge,
      child: Row(
        children: [
          // Icon Rail
          Container(
            width: 72,
            decoration: const BoxDecoration(
              border: Border(
                right: BorderSide(color: Color(0xFFEBE9E8)), // --border
              ),
            ),
            padding: const EdgeInsets.symmetric(vertical: 16), // --space-200
            child: Column(
              children: [
                // Logo
                SizedBox(
                  width: 44,
                  height: 44,
                  child: Center(
                    child: RichText(
                      text: const TextSpan(
                        children: [
                          TextSpan(
                            text: 'ey',
                            style: TextStyle(
                              fontFamily: 'Lexend',
                              fontSize: 12,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFFF8785E), // --primary
                            ),
                          ),
                          TextSpan(
                            text: 'w',
                            style: TextStyle(
                              fontFamily: 'Lexend',
                              fontSize: 12,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF2E2B2B), // --foreground
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 8), // --space-100

                // Dashboard (active)
                _ModuleIcon(icon: Icons.home_outlined, isActive: true, label: 'Dashboard'),
                // Inactive modules
                _ModuleIcon(icon: Icons.person_outline, label: 'Children'),
                _ModuleIcon(icon: Icons.school_outlined, label: 'Teachers'),
                _ModuleIcon(icon: Icons.chat_bubble_outline, label: 'Messages'),
                _ModuleIcon(icon: Icons.calendar_today_outlined, label: 'Calendar'),
                _ModuleIcon(icon: Icons.folder_outlined, label: 'Reports'),

                // Divider
                Container(
                  width: 50,
                  height: 1,
                  color: const Color(0xFFC2BCBB), // --border-hover
                  margin: const EdgeInsets.symmetric(vertical: 4),
                ),

                // Integrations
                _ModuleIcon(icon: Icons.language_outlined, label: 'Integrations'),
              ],
            ),
          ),

          // Submenu Panel
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Header
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12), // --space-150
                  decoration: const BoxDecoration(
                    border: Border(
                      bottom: BorderSide(color: Color(0xFFEBE9E8)), // --border
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          const Icon(Icons.home_outlined, size: 20, color: Color(0xFFF8785E)), // --primary
                          const SizedBox(width: 8), // --space-100
                          const Text(
                            'Dashboard',
                            style: TextStyle(
                              fontFamily: 'Lexend',
                              fontSize: 16,
                              fontWeight: FontWeight.w500,
                              color: Color(0xFFF8785E), // --primary
                            ),
                          ),
                        ],
                      ),
                      const Icon(Icons.menu, size: 16, color: Color(0xFF7A7272)), // --muted-foreground
                    ],
                  ),
                ),

                // Nav links
                Padding(
                  padding: const EdgeInsets.all(8), // --space-100
                  child: Column(
                    children: [
                      _NavLink(label: 'Overview', isSelected: true),
                      const SizedBox(height: 4),
                      _NavLink(label: 'Analytics'),
                      const SizedBox(height: 4),
                      _NavLink(label: 'Reports'),
                    ],
                  ),
                ),

                const Spacer(),

                // EllieCTA
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 0, 8, 8),
                  child: Container(
                    width: 218,
                    height: 156,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(10),
                      gradient: const LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [
                          Color(0xFFF8785E), // --primary
                          Color(0xFFF472B6), // pink
                          Color(0xFFA78BFA), // purple
                        ],
                        stops: [0.0, 0.5, 1.0],
                      ),
                    ),
                    padding: const EdgeInsets.all(10),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Ellie', style: TextStyle(fontFamily: 'Abel', fontSize: 18, color: Color(0xFFFFFFFF), letterSpacing: 0.43)),
                            SizedBox(height: 4),
                            Text('How can I help you today?', style: TextStyle(fontFamily: 'Lexend', fontSize: 20, fontWeight: FontWeight.w700, color: Color(0xFFFFFFFF), height: 24 / 20)),
                          ],
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFFFFFFFF), // --background
                            foregroundColor: const Color(0xFF7A7272), // --muted-foreground
                            elevation: 0,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                            textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
                            minimumSize: const Size(0, 28),
                          ),
                          child: const Text('Button'),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _ModuleIcon extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isActive;

  const _ModuleIcon({
    required this.icon,
    required this.label,
    this.isActive = false,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 50,
      height: 52,
      child: Center(
        child: Container(
          width: 42,
          height: 42,
          decoration: BoxDecoration(
            color: isActive ? const Color(0xFFF8785E) : Colors.transparent, // --primary
            borderRadius: BorderRadius.circular(8), // --radius-medium
          ),
          child: Icon(
            icon,
            size: 20,
            color: isActive ? const Color(0xFFFFFFFF) : const Color(0xFF5C5655), // active: --primary-foreground, else: --subtle
          ),
        ),
      ),
    );
  }
}

class _NavLink extends StatelessWidget {
  final String label;
  final bool isSelected;

  const _NavLink({required this.label, this.isSelected = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(8), // --space-100
      decoration: BoxDecoration(
        color: isSelected
            ? const Color(0xFFFAFAFA) // --accent-gray-subtlest
            : const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      child: Text(
        label,
        style: TextStyle(
          fontFamily: 'Lexend',
          fontSize: 14,
          height: 20 / 14,
          fontWeight: isSelected ? FontWeight.w600 : FontWeight.w400,
          color: isSelected
              ? const Color(0xFF2E2B2B) // --foreground
              : const Color(0xFF5C5655), // --subtle
        ),
      ),
    );
  }
}
