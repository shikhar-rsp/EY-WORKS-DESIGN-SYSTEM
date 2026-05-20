import 'package:flutter/material.dart';

class EmptyWithAction extends StatelessWidget {
  const EmptyWithAction({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 40, horizontal: 24),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Column(
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(
                  color: const Color(0xFFFAFAFA), // --muted
                  borderRadius: BorderRadius.circular(16), // --radius-large
                  border: Border.all(color: const Color(0xFFEBE9E8)), // --border
                ),
                child: const Icon(
                  Icons.folder_outlined,
                  size: 24,
                  color: Color(0xFF7A7272), // --muted-foreground
                ),
              ),
              const SizedBox(height: 16),
              const Text(
                'No projects found',
                style: TextStyle(
                  fontFamily: 'Lexend',
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF2E2B2B), // --foreground
                ),
              ),
              const SizedBox(height: 8),
              const SizedBox(
                width: 280,
                child: Text(
                  'Create your first project to get started with the workspace.',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    height: 1.625,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFF8785E), // --primary
              foregroundColor: const Color(0xFFFFFFFF), // --primary-foreground
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(8), // --radius-medium
              ),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              minimumSize: const Size(0, 32),
              textStyle: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500),
            ),
            child: const Text('New project'),
          ),
        ],
      ),
    );
  }
}
