import 'package:flutter/material.dart';

class ProgressMenuDefault extends StatelessWidget {
  const ProgressMenuDefault({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 320,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Title
          const Text(
            'Getting Started',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w600,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(height: 12),

          // Step 1: Account Setup (success)
          _StepRow(
            icon: Icons.check,
            iconColor: const Color(0xFFFFFFFF),
            iconBg: const Color(0xFF65A30D), // --success-foreground
            rowBg: const Color(0xFFECFCCB), // --success-subtle
            label: 'Account Setup',
            description: 'Complete your account',
            labelColor: const Color(0xFF2E2B2B), // --foreground
            isInProgress: false,
            isSuccess: true,
          ),

          // Connector
          const _Connector(),

          // Step 2: Child Profile (in-progress)
          _StepRow(
            icon: Icons.person_outline,
            iconColor: const Color(0xFFF8785E), // --primary
            iconBg: const Color(0xFFFEE4DF), // --primary-subtle
            rowBg: const Color(0xFFFEE4DF), // --primary-subtle
            label: 'Child Profile',
            description: "Add your child's info",
            labelColor: const Color(0xFF2E2B2B), // --foreground
            isInProgress: true,
            isSuccess: false,
            tag: 'Optional',
          ),

          // Connector
          const _Connector(),

          // Step 3: Global Settings (default)
          _StepRow(
            icon: Icons.settings_outlined,
            iconColor: const Color(0xFF5C5655), // --subtle
            iconBg: const Color(0xFFF4F4F4), // --accent-gray-subtler
            rowBg: const Color(0xFFFAFAFA), // --accent-gray-subtlest
            label: 'Global Settings',
            description: 'Configure preferences',
            labelColor: const Color(0xFF5C5655), // --subtle
            isInProgress: false,
            isSuccess: false,
          ),

          const SizedBox(height: 16),

          // Buttons
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFFF8785E), // --primary
                    side: const BorderSide(color: Color(0xFFEBE9E8)), // --border
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Skip'),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF8785E), // --primary
                    foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8), // --radius-medium
                    ),
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  child: const Text('Continue'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _Connector extends StatelessWidget {
  const _Connector();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 2,
      height: 20,
      margin: const EdgeInsets.only(left: 19),
      color: const Color(0xFFF4F4F4), // --accent-gray-subtler
    );
  }
}

class _StepRow extends StatelessWidget {
  final IconData icon;
  final Color iconColor;
  final Color iconBg;
  final Color rowBg;
  final String label;
  final String description;
  final Color labelColor;
  final bool isInProgress;
  final bool isSuccess;
  final String? tag;

  const _StepRow({
    required this.icon,
    required this.iconColor,
    required this.iconBg,
    required this.rowBg,
    required this.label,
    required this.description,
    required this.labelColor,
    required this.isInProgress,
    required this.isSuccess,
    this.tag,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: rowBg,
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Icon
          SizedBox(
            width: 28,
            height: 28,
            child: Stack(
              alignment: Alignment.center,
              children: [
                if (isInProgress) ...[
                  // Outer ring
                  Container(
                    width: 28,
                    height: 28,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: const Color(0xFFF8785E).withOpacity(0.5), // --primary
                        width: 2,
                      ),
                    ),
                  ),
                  // Inner circle
                  Container(
                    width: 20,
                    height: 20,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: iconBg,
                      border: Border.all(
                        color: const Color(0xFFF8785E), // --primary
                        width: 2,
                      ),
                    ),
                    child: Icon(icon, size: 12, color: iconColor),
                  ),
                ] else ...[
                  Container(
                    width: 28,
                    height: 28,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: iconBg,
                    ),
                    child: Icon(icon, size: 14, color: iconColor),
                  ),
                ],
              ],
            ),
          ),
          const SizedBox(width: 12),

          // Text
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(
                      label,
                      style: TextStyle(
                        fontFamily: 'Lexend',
                        fontSize: 14,
                        fontWeight: FontWeight.w500,
                        color: labelColor,
                      ),
                    ),
                    if (tag != null) ...[
                      const SizedBox(width: 6),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1),
                        decoration: BoxDecoration(
                          color: const Color(0xFFF4F4F4), // --muted
                          borderRadius: BorderRadius.circular(4), // --radius-small
                        ),
                        child: Text(
                          tag!,
                          style: const TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 11,
                            fontWeight: FontWeight.w500,
                            color: Color(0xFF7A7272), // --muted-foreground
                          ),
                        ),
                      ),
                    ],
                  ],
                ),
                const SizedBox(height: 2),
                Text(
                  description,
                  style: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    color: Color(0xFF7A7272), // --muted-foreground
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
