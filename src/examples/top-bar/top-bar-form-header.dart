import 'package:flutter/material.dart';

class TopBarFormHeader extends StatefulWidget {
  const TopBarFormHeader({super.key});

  @override
  State<TopBarFormHeader> createState() => _TopBarFormHeaderState();
}

class _TopBarFormHeaderState extends State<TopBarFormHeader>
    with SingleTickerProviderStateMixin {
  bool _isSaving = false;
  late AnimationController _spinController;

  @override
  void initState() {
    super.initState();
    _spinController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 1),
    );
  }

  @override
  void dispose() {
    _spinController.dispose();
    super.dispose();
  }

  void _handleReset() {
    setState(() => _isSaving = true);
    _spinController.repeat();
    Future.delayed(const Duration(seconds: 2), () {
      if (mounted) {
        setState(() => _isSaving = false);
        _spinController.stop();
        _spinController.reset();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(16), // --radius-large
      ),
      child: Container(
        color: const Color(0xFFFFFFFF), // --background
        padding: const EdgeInsets.symmetric(
          horizontal: 12, // --space-150
          vertical: 8, // --space-100
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            // Left: Title + Helper
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'New Child Profile',
                    style: TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      height: 20 / 14,
                      color: Color(0xFF2E2B2B), // --foreground
                    ),
                  ),
                  const SizedBox(height: 4),
                  const Text(
                    'Fill in the details below',
                    style: TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      height: 20 / 14,
                      color: Color(0xFFADA5A5), // --subtlest
                    ),
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),

            // Right: Actions
            Row(
              children: [
                // Saving indicator
                if (_isSaving) ...[
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    child: Row(
                      children: [
                        const Text(
                          'Saving...',
                          style: TextStyle(
                            fontFamily: 'Lexend',
                            fontSize: 14,
                            height: 20 / 14,
                            color: Color(0xFF7A7272), // --muted-foreground
                          ),
                        ),
                        const SizedBox(width: 8),
                        RotationTransition(
                          turns: _spinController,
                          child: const Icon(
                            Icons.refresh,
                            size: 16,
                            color: Color(0xFF7A7272),
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(width: 16),
                ],

                // Reset fields
                OutlinedButton(
                  onPressed: _handleReset,
                  style: OutlinedButton.styleFrom(
                    side: const BorderSide(color: Color(0xFFF8785E)), // --primary
                    backgroundColor: const Color(0xFFFFFFFF),
                    foregroundColor: const Color(0xFFF8785E),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                    ),
                  ),
                  child: const Text('Reset fields'),
                ),
                const SizedBox(width: 16),

                // Close
                OutlinedButton.icon(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    side: const BorderSide(color: Color(0xFFF8785E)),
                    backgroundColor: const Color(0xFFFFFFFF),
                    foregroundColor: const Color(0xFFF8785E),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                    ),
                  ),
                  label: const Text('Close'),
                  icon: const Icon(Icons.cancel_outlined, size: 16),
                  iconAlignment: IconAlignment.end,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
