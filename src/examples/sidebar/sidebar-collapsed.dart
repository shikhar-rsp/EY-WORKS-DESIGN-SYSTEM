import 'package:flutter/material.dart';

class SidebarCollapsed extends StatelessWidget {
  const SidebarCollapsed({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 72,
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
      child: Column(
        children: [
          Expanded(
            child: Container(
              width: 72,
              decoration: const BoxDecoration(
                border: Border(right: BorderSide(color: Color(0xFFEBE9E8))), // --border
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
                  _ModuleButton(
                    icon: Icons.home_outlined,
                    label: 'Dashboard',
                    isActive: true,
                  ),

                  // Inactive modules
                  _ModuleButton(icon: Icons.person_outline, label: 'Children'),
                  _ModuleButton(icon: Icons.school_outlined, label: 'Teachers'),
                  _ModuleButton(icon: Icons.chat_bubble_outline, label: 'Messages'),
                  _ModuleButton(icon: Icons.calendar_today_outlined, label: 'Calendar'),
                  _ModuleButton(icon: Icons.folder_outlined, label: 'Reports'),

                  // Divider
                  Container(
                    width: 50,
                    height: 1,
                    color: const Color(0xFFC2BCBB), // --border-hover
                    margin: const EdgeInsets.symmetric(vertical: 4),
                  ),

                  // Integrations
                  _ModuleButton(icon: Icons.language_outlined, label: 'Integrations'),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ModuleButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isActive;

  const _ModuleButton({
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
            color: isActive
                ? const Color(0xFFF8785E) // --primary
                : Colors.transparent,
            borderRadius: BorderRadius.circular(8), // --radius-medium
          ),
          child: Icon(
            icon,
            size: 20,
            color: isActive
                ? const Color(0xFFFFFFFF) // --primary-foreground
                : const Color(0xFF5C5655), // --subtle
          ),
        ),
      ),
    );
  }
}
